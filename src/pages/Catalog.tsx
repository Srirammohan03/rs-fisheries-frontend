import { useState } from "react";
import { fishData } from "@/data/fishData";
import FishCard from "@/components/FishCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(fishData.flatMap((fish) => fish.tags)));

  // Filter fish based on search and tag
  const filteredFish = fishData.filter((fish) => {
    const matchesSearch =
      searchTerm === "" ||
      fish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fish.shortCode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag === null || fish.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fish Catalog</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Browse our complete selection of premium seafood. All products available fresh or frozen.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or code (e.g., RF-001)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price Notice */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Pricing & Availability:</strong> All prices are provided upon request and vary based on quantity, market conditions, and delivery requirements. Contact us for today's rates.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Fish Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredFish.length > 0 ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Showing {filteredFish.length} {filteredFish.length === 1 ? "product" : "products"}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFish.map((fish) => (
                  <FishCard key={fish.id} fish={fish} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No products found matching your criteria</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedTag(null); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team can help you select the right products for your business needs and provide current pricing and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/enquiry">Request a Quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
