export function handleBuildError(): void {
  fetch("/buildError.txt")
    .then((res) => {
      if (res.status === 404) {
        return "";
      }
      return res.text();
    })
    .then((data) => {
      if (data) {
        console.error(data);
      }
    })
    .catch(console.error);
}
