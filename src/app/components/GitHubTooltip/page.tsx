"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Star, Eye, GitCommit, GitPullRequest } from "lucide-react";

const GitHubTooltip: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex  min-h-screen bg-[#0d1117]">
      <div className="relative">
        <button
          className="flex items-center px-3 py-1 bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] rounded-md transition-colors duration-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <GitBranch className="mr-2 h-4 w-4" />
          main
        </button>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/3 transform -translate-x-1/2 mt-1 w-52 bg-[#161b22] border border-[#30363d] shadow-lg rounded-md overflow-hidden z-10"
            >
              <div className="px-4 py-2 border-b border-[#30363d]">
                <h3 className="font-bold text-sm text-[#c9d1d9]">main</h3>
                <p className="text-xs text-[#8b949e] mt-1">Default branch</p>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-[#8b949e] mb-2">
                  <span>Last commit</span>
                  <span className="font-mono text-[#58a6ff]">3a7e1fd</span>
                </div>
                <p className="text-sm text-[#c9d1d9] mb-2">
                  Update README.md with project description
                </p>
                <div className="flex items-center justify-between text-xs text-[#8b949e] mb-2">
                  <div className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" />
                    <span>78 </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4" />
                    <span>3.2k </span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="mr-1 h-4 w-4" />
                    <span>912 </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ">
                  <div className="flex items-center text-xs text-[#8b949e]">
                    <GitCommit className="mr-1 h-4 w-4" />
                    <span>1,234 </span>
                  </div>
                  <div className="flex items-center text-xs text-[#8b949e]">
                    <GitPullRequest className="mr-1 h-4 w-4" />
                    <span>23 pull </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GitHubTooltip;
