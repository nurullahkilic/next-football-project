import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import CustomPopover from "./popover";

export function LeagueTable({ standings, teamEvents }) {
  return (
    <div className="max-w-5xl mx-auto bg-[#0d0d0d] text-white p-4 rounded-lg">
      <div className="flex w-full justify-between items-center mb-4">
        <div className="flex w-full items-center space-x-2">
          <Image
            alt="League Logo"
            className="h-9 w-9"
            height={36}
            width={36}
            src={`https://api.sofascore.app/api/v1/unique-tournament/${standings?.[0]?.tournament?.uniqueTournament?.id}/image/dark`}
            style={{
              aspectRatio: "1",
              objectFit: "cover",
            }}
          />
          <h1 className="text-lg w-full font-bold">
            {standings?.[0]?.tournament?.name}
          </h1>
          <Select>
            <SelectTrigger id="season">
              <SelectValue placeholder="23/24" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="23/24">23/24</SelectItem>
              <SelectItem value="22/23">22/23</SelectItem>
              <SelectItem value="21/22">21/22</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <div className="flex w-full space-x-2">
          <Button variant="ghost">TÜM</Button>
          <Button variant="ghost">EV SAHİBİ</Button>
          <Button variant="ghost">DEPLASMAN</Button>
        </div> */}
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Takım</TableHead>
              <TableHead>O</TableHead>
              <TableHead>G</TableHead>
              <TableHead>B</TableHead>
              <TableHead>M</TableHead>
              <TableHead>Gol</TableHead>
              <TableHead>Son 5</TableHead>
              <TableHead>PUAN</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {standings?.[0]?.rows?.map((row, index) => (
              <TableRow key={index} className="text-zinc-300">
                <TableCell className="font-medium">{row?.position}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Image
                      alt="Team Logo"
                      className="h-6 w-6 z-10 shadow-xl"
                      height={24}
                      width={24}
                      src={`https://api.sofascore.app/api/v1/team/${row?.team?.id}/image`}
                      style={{
                        aspectRatio: "1",
                        objectFit: "cover",
                      }}
                    />
                    <span className="font-normal text-zinc-100 relative">
                      {row?.team?.name}
                      {/* <span className="absolute -bottom-1.5 left-0 w-16 h-0.5 rounded-full overflow-hidden flex flex-row items-center justify-center">
                        <span
                          className="w-full h-full"
                          style={{ background: row?.team?.teamColors?.primary }}
                        />
                        <span
                          className="w-full h-full"
                          style={{
                            background: row?.team?.teamColors?.secondary,
                          }}
                        />
                      </span> */}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{row?.matches}</TableCell>
                <TableCell>{row?.wins}</TableCell>
                <TableCell>{row?.draws}</TableCell>
                <TableCell>{row?.losses}</TableCell>
                <TableCell>
                  {row?.scoresFor}:{row?.scoresAgainst}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1">
                    {generateFormStatus({
                      teamEvents: teamEvents?.["1"],
                      teamId: row?.team?.id,
                    }).map((form, index) => (
                      <CustomPopover
                        key={index}
                        content={<MatchDetailBar form={form} />}
                        backdrop={
                          <Badge
                            variant={form?.resultCode}
                            className="cursor-pointer"
                          >
                            {form?.resultText}
                          </Badge>
                        }
                      />
                      // <Popover key={index}>
                      //   <PopoverTrigger>
                      //     <Badge variant={form?.resultCode}>
                      //       {form?.resultText}
                      //     </Badge>
                      //   </PopoverTrigger>
                      //   <PopoverContent className="w-auto p-0 border-none bg-transparent rounded-md overflow-hidden">
                      //     <MatchDetailBar form={form} />
                      //   </PopoverContent>
                      // </Popover>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{row?.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const MatchDetailBar = ({ form }) => {
  return (
    <div className="h-9 flex flex-row items-start justify-center gap-x-[2px] bg-zinc-800 overflow-hidden rounded-md ">
      <div className="w-auto h-8 flex items-center justify-center bg-black">
        <div className="relative h-8 flex flex-row items-center pl-16 pr-4 justify-start overflow-hidden">
          <Image
            alt="Team Logo"
            className="absolute left-1.5 top-[50%] -translate-y-[50%] h-12 w-12 z-10"
            height={48}
            width={48}
            src={`https://api.sofascore.app/api/v1/team/${form?.event?.homeTeam?.id}/image`}
            style={{
              aspectRatio: "1",
              objectFit: "cover",
            }}
          />
          <span className="text-zinc-100 font-extrabold relative">
            {form?.event?.homeTeam?.nameCode}
          </span>
          <span
            className="absolute w-full h-1 top-auto bottom-0 right-0 left-0"
            style={{
              background: form?.event?.homeTeam?.teamColors?.primary,
            }}
          />
        </div>

        <div className="h-8 w-8 aspect-square font-bold text-lg flex items-center justify-center bg-white text-black ">
          {form?.event?.homeScore?.normaltime}
        </div>
      </div>
      <div className="w-auto h-8 flex flex-row-reverse items-center justify-center bg-black">
        <div className="relative h-8 flex items-center pr-16 pl-4 justify-end overflow-hidden">
          <Image
            alt="Team Logo"
            className="absolute right-1.5 top-[50%] -translate-y-[50%] h-12 w-12 z-10"
            height={48}
            width={48}
            src={`https://api.sofascore.app/api/v1/team/${form?.event?.awayTeam?.id}/image`}
            style={{
              aspectRatio: "1",
              objectFit: "cover",
            }}
          />
          <span className="text-zinc-100 font-extrabold relative">
            {form?.event?.awayTeam?.nameCode}
          </span>
          <span
            className="absolute w-full h-1 top-auto bottom-0 right-0 left-0"
            style={{
              background: form?.event?.awayTeam?.teamColors?.primary,
            }}
          />
        </div>

        <div className="h-8 w-8 aspect-square font-bold text-lg flex items-center justify-center bg-white text-black ">
          {form?.event?.awayScore?.normaltime}
        </div>
      </div>
    </div>
  );
};

const generateFormStatus = ({ teamEvents = {}, teamId }) => {
  const formStatus = teamEvents[teamId]?.map((event) => {
    if (event.winnerCode === 3)
      return {
        resultCode: "draw",
        resultText: "D",
        event,
      };
    const isRowTeamHome = event?.homeTeam?.id === teamId;
    const isRowTeamWin = isRowTeamHome
      ? event.winnerCode === 1
      : event.winnerCode === 2;
    return {
      resultCode: isRowTeamWin ? "win" : "lose",
      resultText: isRowTeamWin ? "W" : "L",
      event,
    };
  });
  return formStatus || [];
};
