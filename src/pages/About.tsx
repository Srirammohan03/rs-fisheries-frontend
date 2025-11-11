import { Card, CardContent } from "@/components/ui/card";
import { Shield, Thermometer, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About RS Fisheries</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Your trusted partner in quality seafood supply, serving businesses with excellence since day one.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none space-y-4 text-foreground">
              <p>
                RS Fisheries was founded with a clear mission: to bridge the gap between quality seafood sources and businesses that demand reliability, freshness, and transparency. What started as a local operation has grown into a trusted multi-market distributor serving restaurants, retailers, and wholesalers.
              </p>
              <p>
                We understand that in the seafood business, timing and quality are everything. That's why we've invested heavily in digitizing our operations, from real-time inventory tracking to cold-chain monitoring, ensuring that every shipment meets the highest standards.
              </p>
              <p>
                Today, RS Fisheries operates with a modern approach to traditional seafood supply. Our team combines industry expertise with technology-driven operations, making us a partner you can count on for consistent quality and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <Shield className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold text-lg">Quality First</h3>
                <p className="text-sm text-muted-foreground">
                  Every product meets strict quality standards before reaching our customers
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <Thermometer className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold text-lg">Cold Chain Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Maintaining optimal temperatures from source to delivery
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <Users className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold text-lg">Customer Partnership</h3>
                <p className="text-sm text-muted-foreground">
                  Building long-term relationships through reliability and communication
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <Globe className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-semibold text-lg">Sustainable Practices</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to responsible sourcing and environmental stewardship
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality & Hygiene */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Quality & Hygiene Standards</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Cold Chain Management</h3>
                  <p className="text-muted-foreground">
                    From the moment seafood is sourced to the time it reaches your facility, we maintain strict temperature controls. Our refrigerated trucks and storage facilities are monitored 24/7 to ensure product integrity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Certifications & Compliance</h3>
                  <p className="text-muted-foreground">
                    RS Fisheries maintains all necessary food safety certifications and adheres to local and international hygiene standards. Regular audits and quality checks are part of our standard operating procedures.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Traceability</h3>
                  <p className="text-muted-foreground">
                    Every batch can be traced back to its source. Our digital systems maintain complete records of origin, handling, and delivery, giving you confidence in the products you receive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Served */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Markets We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Local Markets</h3>
                  <p className="text-sm text-muted-foreground">
                    Same-day and next-day delivery to restaurants and retailers in our immediate service area.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Regional Distribution</h3>
                  <p className="text-sm text-muted-foreground">
                    Scheduled deliveries to wholesalers and larger buyers across the region with reliable logistics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">Export-Ready</h3>
                  <p className="text-sm text-muted-foreground">
                    Capability to handle export orders with proper documentation and international shipping coordination.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
            <p className="text-xl text-primary-foreground/90 mb-6">
              At RS Fisheries, we don't just supply seafood – we build partnerships. Our commitment extends beyond the transaction to ensure your business has the reliable supply chain it needs to succeed.
            </p>
            <p className="text-lg text-primary-foreground/80">
              When you work with RS Fisheries, you're working with a team that understands the importance of quality, timing, and communication in the seafood industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
