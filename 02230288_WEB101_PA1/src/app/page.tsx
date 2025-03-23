"use client"

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, User } from "lucide-react";
import Navbar from "@/components/NavBar";
import RecentDocuments from "@/components/RecentDocument";

export default function GoogleDocsClone() {
  const documents1 = [
    { id: 1, title: "Project Proposal", date: "Mar 18, 2025" },
    { id: 2, title: "Meeting Notes", date: "Mar 17, 2025" },
    { id: 3, title: "My blog", date: "Mar 16, 2025" },
  ];

  const documents2 = [
    { id: 3, title: "Budget Report", date: "Mar 15, 2025" },
    { id: 4, title: "Marketing Plan", date: "Mar 14, 2025" },
    { id: 5, title: "Notes", date: "Mar 19, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
       <Navbar />
       
      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {/* Start a New Document */}
        <section>
          <h2 className="text-lg font-semibold mb-3">Start a new document</h2>
          <Card className="w-32 h-40 flex items-center justify-center cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex items-center justify-center h-full">
              <Plus className="w-10 h-10 text-gray-500" />
            </CardContent>
          </Card>
        </section>
        

        {/* Recent Documents */}
        <RecentDocuments title="Recent Work Documents" documents={documents1} />
        <RecentDocuments title="Personal Documents" documents={documents2} />
      </main>
    </div>
  );
}
