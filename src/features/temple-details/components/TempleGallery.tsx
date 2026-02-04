import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import {
  Image,
  ChevronLeft,
  ChevronRight,
  X,
  Download,
  ZoomIn,
} from "lucide-react";
import type { TempleDetails } from "../types/templeDetails";

interface TempleGalleryProps {
  temple: TempleDetails;
}

const TempleGallery = ({ temple }: TempleGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Get additional images (skip the first one as it's used in hero)
  const additionalImages = temple.images.slice(1);

  if (additionalImages.length === 0) {
    return null;
  }

  const currentImage = additionalImages[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? additionalImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === additionalImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(currentImage.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${temple.name}-gallery-${currentIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      // Fallback: open image in new tab
      window.open(currentImage.url, "_blank");
    }
  };

  return (
    <>
      <Card className="bg-gradient-card border-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Image className="w-5 h-5 text-primary" />
            Gallery
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Carousel */}
          <div className="relative">
            {/* Main Image */}
            <div
              className="rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setIsPreviewOpen(true)}
            >
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                className="w-full h-[200px] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Navigation Arrows */}
            {additionalImages.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>

          {/* Caption */}
          {currentImage.caption && (
            <p className="text-sm text-muted-foreground text-center">
              {currentImage.caption}
            </p>
          )}

          {/* Dots Indicator */}
          {additionalImages.length > 1 && (
            <div className="flex justify-center gap-2">
              {additionalImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}

          {/* Image Counter */}
          <p className="text-xs text-muted-foreground text-center">
            {currentIndex + 1} of {additionalImages.length}
          </p>
        </CardContent>
      </Card>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          {/* Close Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/20 hover:bg-background/40 border-white/20"
            onClick={() => setIsPreviewOpen(false)}
          >
            <X className="w-5 h-5 text-white" />
          </Button>

          {/* Navigation in Preview */}
          {additionalImages.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/20 hover:bg-background/40 border-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/20 hover:bg-background/40 border-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </Button>
            </>
          )}

          {/* Preview Image */}
          <div
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />

            {/* Caption & Download */}
            <div className="mt-4 flex flex-col items-center gap-3">
              {currentImage.caption && (
                <p className="text-white text-center">{currentImage.caption}</p>
              )}
              <Button
                variant="outline"
                className="bg-background/20 hover:bg-background/40 border-white/20 text-white"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Image
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TempleGallery;
