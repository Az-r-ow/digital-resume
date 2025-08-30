import React from "react";
import { siteConfig } from "@/data";

export interface AuthorFormatOptions {
  highlightName?: string;
  separator?: string;
  boldClass?: string;
}

/**
 * Formats an array of author names, highlighting a specific author (typically your own name)
 * @param authors - Array of author names
 * @param options - Formatting options
 * @returns JSX element with formatted authors
 */
export function formatAuthors(
  authors: string[],
  options: AuthorFormatOptions = {}
): React.ReactElement {
  const {
    highlightName = siteConfig.name,
    separator = ", ",
    boldClass = "font-semibold text-foreground",
  } = options;

  // Create variants of the name to match (handles different formats)
  const nameVariants = [
    highlightName,
    highlightName
      .split(" ")
      .map((part) => part.charAt(0))
      .join(". "), // A. Azar
    highlightName.split(" ").reverse().join(", "), // Azar, Antoine
    `${highlightName.split(" ")[0].charAt(0)}. ${highlightName
      .split(" ")
      .slice(1)
      .join(" ")}`, // A. Azar
  ];

  const formatAuthor = (author: string, index: number) => {
    const trimmedAuthor = author.trim();
    const isHighlighted = nameVariants.some(
      (variant) =>
        trimmedAuthor.toLowerCase() === variant.toLowerCase() ||
        trimmedAuthor.toLowerCase().includes(highlightName.toLowerCase())
    );

    return (
      <span key={index}>
        {isHighlighted ? (
          <strong className={boldClass}>{trimmedAuthor}</strong>
        ) : (
          <span>{trimmedAuthor}</span>
        )}
        {index < authors.length - 1 && separator}
      </span>
    );
  };

  return <>{authors.map(formatAuthor)}</>;
}

/**
 * Alternative function that returns a formatted string with HTML for cases where JSX isn't suitable
 */
export function formatAuthorsAsString(
  authors: string[],
  options: AuthorFormatOptions = {}
): string {
  const { highlightName = siteConfig.name, separator = ", " } = options;

  const nameVariants = [
    highlightName,
    highlightName
      .split(" ")
      .map((part) => part.charAt(0))
      .join(". "),
    highlightName.split(" ").reverse().join(", "),
    `${highlightName.split(" ")[0].charAt(0)}. ${highlightName
      .split(" ")
      .slice(1)
      .join(" ")}`,
  ];

  return authors
    .map((author) => {
      const trimmedAuthor = author.trim();
      const isHighlighted = nameVariants.some(
        (variant) =>
          trimmedAuthor.toLowerCase() === variant.toLowerCase() ||
          trimmedAuthor.toLowerCase().includes(highlightName.toLowerCase())
      );

      return isHighlighted
        ? `<strong>${trimmedAuthor}</strong>`
        : trimmedAuthor;
    })
    .join(separator);
}
