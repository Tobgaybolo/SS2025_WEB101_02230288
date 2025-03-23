import { Card } from "@/components/ui/card";

// ✅ Define TypeScript types for props
interface Document {
  id: number;
  title: string;
  date: string;
}

interface RecentDocumentsProps {
  title: string;
  documents: Document[];
}

export default function RecentDocuments({ title, documents }: RecentDocumentsProps) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <Card key={doc.id} className="p-4 flex justify-between items-center">
            <span className="font-medium">{doc.title}</span>
            <span className="text-gray-500 text-sm">{doc.date}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
