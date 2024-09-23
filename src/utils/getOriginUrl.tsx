export const getOriginUrl = () => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  return origin + "/_assets";
};

export const getImage = (url: string) => {
  return getOriginUrl() + url;
};
