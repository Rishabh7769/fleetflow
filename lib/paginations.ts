export interface PaginationQuery {
  page?: number;
  limit?: number;
}

export function getPagination(query: PaginationQuery) {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  return {
    page,
    limit,
    skip: (page - 1) * limit,
  };
}