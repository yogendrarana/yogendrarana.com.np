import React from "react";
import { MapPin } from "lucide-react";

import { MY_DATA } from "@/config/data";
import { Badge } from "@/components/ui/badge";
import MaxWidthContainer from "@/components/max-width-container";

function Hero() {
    return (
        <section id="home" className="border-b border-dashed">
            <MaxWidthContainer className="sm:border-l sm:border-r border-dashed">
                <div className="py-24">
                    <div className="text-center">
                        <Badge
                            variant="outline"
                            className="mb-6 rounded-full px-3 py-1 text-muted-foreground"
                        >
                            <MapPin className="h-3 w-3 mr-1" />
                            Pokhara, Nepal
                        </Badge>

                        <h1 className="text-5xl font-bold mb-4 text-foreground">{MY_DATA.name}</h1>
                    </div>
                </div>
            </MaxWidthContainer>
        </section>
    );
}

export default Hero;
