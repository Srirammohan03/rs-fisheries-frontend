import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, UtensilsCrossed, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ForBuyers = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Buyers</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Whether you're a restaurant, retailer, or wholesaler, RS Fisheries has the supply chain solutions you need.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <UtensilsCrossed className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Restaurants & Catering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left space-y-2">
                  <p>Perfect for establishments that need:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Consistent quality for menu planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Flexible order quantities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Reliable delivery schedules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Premium selections for special dishes</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Store className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Retailers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left space-y-2">
                  <p>Ideal for retail businesses needing:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Fresh daily or weekly deliveries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Variety for display cases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Competitive retail pricing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Product training and support</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Wholesalers & Distributors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left space-y-2">
                  <p>Supporting large-scale operations with:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Bulk pricing and volume discounts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Consistent supply for redistribution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Flexible delivery logistics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Partnership opportunities</span>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Ordering & Delivery Process</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 text-sm font-bold">1</span>
                    Initial Enquiry
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Submit your requirements through our online enquiry form, via email, or by phone. Include details about the products you need, quantities, and preferred delivery schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 text-sm font-bold">2</span>
                    Quote & Confirmation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Within 24 hours, receive a detailed quote including pricing, product availability, and delivery options. Review the quote and confirm your order with our team. For regular buyers, we can set up recurring orders.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 text-sm font-bold">3</span>
                    Processing & Preparation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your order is processed through our digital system. Products are selected, quality-checked, and prepared for shipment with proper cold-chain handling. You'll receive order confirmation and tracking details.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3 text-sm font-bold">4</span>
                    Delivery & Follow-up
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive your seafood on the scheduled date via our refrigerated trucks. Our driver will confirm delivery and condition. We follow up to ensure satisfaction and gather any feedback for future orders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Terms */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Payment & Terms Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Bank transfer / Wire transfer</p>
                  <p>• Net payment terms for approved accounts</p>
                  <p>• Cash on delivery (for qualified buyers)</p>
                  <p>• Credit terms available after account review</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Free delivery on orders above minimum value</p>
                  <p>• Scheduled delivery windows available</p>
                  <p>• Express delivery for urgent orders</p>
                  <p>• Flexible pickup options from our facility</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Minimum Order</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Varies by delivery location and product type</p>
                  <p>• Lower minimums for regular customers</p>
                  <p>• Mixed product orders accepted</p>
                  <p>• Contact us for specific requirements</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality Guarantee</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• 100% satisfaction guarantee</p>
                  <p>• Report issues within 24 hours</p>
                  <p>• Replacement or credit for quality concerns</p>
                  <p>• Full documentation support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Ordering?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join hundreds of businesses that trust RS Fisheries for their seafood supply needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enquiry">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/catalog">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground">
                  View Catalog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBuyers;
