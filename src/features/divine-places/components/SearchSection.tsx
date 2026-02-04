import { Search, X } from "lucide-react";
import type {
  SearchResult,
  JyotirlingaPlace,
  ShaktiPeethaPlace,
} from "../types";
import { divinePlacesPageContent } from "../constants";

interface SearchSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  searchResults: SearchResult[];
}

export const SearchSection = ({
  searchQuery,
  onSearchChange,
  searchResults,
}: SearchSectionProps) => {
  const { search } = divinePlacesPageContent;

  return (
    <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={search.placeholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Quick Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-4 border-t pt-4">
            <p className="text-sm text-gray-500 mb-2">
              {search.quickResultsLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {searchResults.map((result, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {result.deity?.name ||
                    (result.place as JyotirlingaPlace | ShaktiPeethaPlace)
                      ?.name}
                  <span className="text-gray-400 ml-1">
                    (
                    {result.type === "deity"
                      ? "Deity"
                      : result.type === "jyotirlinga"
                        ? "Jyotirlinga"
                        : "Shakti Peetha"}
                    )
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Example searches */}
        {!searchQuery && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-sm text-gray-500">{search.tryLabel}</span>
            {search.suggestedTerms.map((term) => (
              <button
                key={term}
                onClick={() => onSearchChange(term)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
