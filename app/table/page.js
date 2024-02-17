import { LeagueTable } from "@/components/league-table";

export default async function Table() {
  const standingsResponse = await fetch(
    "https://api.sofascore.com/api/v1/unique-tournament/17/season/52186/standings/total"
  );
  const teamEventsResponse = await fetch(
    "https://api.sofascore.com/api/v1/unique-tournament/17/season/52186/team-events/total"
  );
  const { standings } = await standingsResponse.json();
  const { tournamentTeamEvents } = await teamEventsResponse.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LeagueTable standings={standings} teamEvents={tournamentTeamEvents} />
    </main>
  );
}
