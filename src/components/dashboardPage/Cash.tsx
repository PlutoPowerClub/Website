"use client";
import Link from "next/link";

import React, { useState } from "react";
import ComponentLayout from "../componentLayout";

const Cash = () => {
  const currentAmount = 10000;
  const goalAmount = 20000;
  const progress = (currentAmount / goalAmount) * 100;

  const [projects, setProjects] = useState<
    Array<{ name: string; votes: number }>
  >([]);
  const [newProject, setNewProject] = useState("");

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProject.trim()) {
      setProjects([...projects, { name: newProject, votes: 0 }]);
      setNewProject("");
    }
  };

  const handleVote = (index: number) => {
    const updatedProjects = [...projects];
    updatedProjects[index].votes += 1;
    setProjects(updatedProjects);
  };

  return (
    <ComponentLayout className="col-span-2">
      <div className="col-span-12">
        <h5 className="mb-4 text-3xl font-bold text-neutral-800">
          Community Cashback
        </h5>
        <p className="mb-6 text-lg text-neutral-800 lg:text-xl">
          The more energy your community makes, the more cash you get for
          community projects! As an Octopus Energy customer, your solar energy
          gets sold back to the grid, making you and your community money.
        </p>
        <div className="space-y-4">
          {/* Existing SELCE project */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-neutral-800">
              South East London Community Energy
            </span>
            <span className="text-lg font-medium text-neutral-800">
              £{currentAmount.toLocaleString()} / £{goalAmount.toLocaleString()}
            </span>
          </div>
          <div className="relative h-8 w-full overflow-hidden rounded-full bg-neutral-200">
            <div
              className="absolute h-full bg-green-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Added Projects */}
          {projects.map((project, index) => (
            <div key={index} className="space-y-2">
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-neutral-800">
                  {project.name}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium text-neutral-800">
                    Proposed ({project.votes} votes)
                  </span>
                  <button
                    className="rounded-lg bg-neutral-800 px-3 py-1 text-sm text-neutral-50 hover:bg-neutral-700"
                    onClick={() => handleVote(index)}
                  >
                    +1
                  </button>
                </div>
              </div>
              <div className="relative h-8 w-full overflow-hidden rounded-full bg-neutral-200">
                <div className="absolute h-full w-0 bg-green-600" />
              </div>
            </div>
          ))}
          {/* Add Project Form */}
          <form onSubmit={handleAddProject} className="mt-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={newProject}
                onChange={(e) => setNewProject(e.target.value)}
                placeholder="Add a new community project..."
                className="flex-1 rounded-lg border border-neutral-300 px-4 py-2 text-lg focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-neutral-800 px-6 py-2 text-lg text-neutral-50 hover:bg-neutral-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="my-10 text-lg text-neutral-800 lg:text-xl">
        Want more ideas for community projects?
        <Link href="/projects">
          <button className="mx-5 rounded-lg bg-neutral-800 px-5 py-2 text-lg text-neutral-50 hover:bg-neutral-700 sm:text-xl">
            More ideas
          </button>
        </Link>
      </p>
    </ComponentLayout>
  );
};

export default Cash;
