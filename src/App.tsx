import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import * as S from "./app.styles";
import { theme } from "./theme";
import GamePage from "./GamePage";
import RankingPage from "./RankingPage";
import { LEVEL_CONFIGS, Level } from "./types";
import { useGameLogic } from "./useGameLogic";
import "./App.css";

type Page = "game" | "ranking";

export default function App() {
  const [page, setPage] = useState<Page>("game");
  const [level, setLevel] = useState<Level>(1);
  const game = useGameLogic(level);

  const handleNavigate = (nextPage: Page) => {
    if (nextPage === "ranking") {
      game.resetGame();
    }
    setPage(nextPage);
  };

  return (
    <ThemeProvider theme={theme}>
      <S.HeaderWrapper>
        <S.HeaderLeft>
          <S.HeaderTitle>1 to 50</S.HeaderTitle>
          <S.NavButton
            active={page === "game"}
            onClick={() => handleNavigate("game")}
          >
            게임 🎮
          </S.NavButton>
          <S.NavButton
            active={page === "ranking"}
            onClick={() => handleNavigate("ranking")}
          >
            랭킹 🏆
          </S.NavButton>
        </S.HeaderLeft>
        <S.HeaderRight>
          {page === "game" && (
            <>
              <S.LevelSelect
                value={level}
                onChange={(e) => setLevel(Number(e.target.value) as Level)}
              >
                {Object.values(LEVEL_CONFIGS).map((cfg) => (
                  <option key={cfg.level} value={cfg.level}>
                    {cfg.label} {cfg.emoji}
                  </option>
                ))}
              </S.LevelSelect>
              <S.Timer>{game.elapsed.toFixed(2)}</S.Timer>
            </>
          )}
        </S.HeaderRight>
      </S.HeaderWrapper>

      {page === "game" ? (
        <GamePage level={level} game={game} />
      ) : (
        <RankingPage />
      )}
    </ThemeProvider>
  );
}
