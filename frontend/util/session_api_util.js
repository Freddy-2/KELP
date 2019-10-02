export const signup = (user) => {
  return $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user }
  });
}
export const login = (user) => {
  return $.ajax({
    url: "/api/sessions",
    method: "POST",
    data: { user }
  });
}
export const logout = (userId) => {
  return $.ajax({
    url: `/api/sessions/${userId}`,
    method: "DELETE",
  });
}