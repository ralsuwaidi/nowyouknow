export interface MovieDataType {
  id: number;
  attributes: {
    title: string;
    violence_rating: number;
    language_rating: number;
    summary: string;
    violence: string;
    language: string;
    inappropriate: string;
    religious_imagery: string;
    year: number;
    rating: string;
    duration: string;
    inappropriate_rating: number;
    drug_usage: string;
    createdAt: string;
    updatedAt: string;
    poster: {
      data: {
        attributes: {
          alternativeText: null | string;
          caption: null | string;
          createdAt: string;
          ext: string;
          formats: {
            large: {
              hash: string;
              height: number;
              width: number;
              url: string;
              size: number;
            };
            small: {
              hash: string;
              height: number;
              width: number;
              url: string;
              size: number;
            };
            medium: {
              hash: string;
              height: number;
              width: number;
              url: string;
              size: number;
            };
            thumbnail: {
              hash: string;
              height: number;
              width: number;
              url: string;
              size: number;
            };
          };
          hash: string;
          height: number;
          mime: string;
          name: string;
          previewUrl: null | string;
          provider: string;
          provider_metadata: null | unknown;
          size: number;
          updatedAt: string;
          url: string;
          width: number;
        };
      };
    };
    publishedAt: string;
  };
}

export interface MovieResponseType {
  data: {
    data: MovieDataType[];
    meta: {
      pagination: {
        start: number;
        limit: number;
        total: number;
      };
    };
  };
}

export interface SingleMovieResponseType {
  data: {
    data: MovieDataType;
    meta: {
      pagination: {
        start: number;
        limit: number;
        total: number;
      };
    };
  };
}
