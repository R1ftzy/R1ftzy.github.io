import { GitHubCalendar } from "react-github-calendar";

export default function GithubGraph() {
  return (
    <section className="github-graph">
      <h1>github activity</h1>

      <GitHubCalendar
        username="R1ftzy"
        colorScheme="dark"
        blockSize={19}
        blockMargin={4}
        fontSize={16}
      />
    </section>
  );
}
