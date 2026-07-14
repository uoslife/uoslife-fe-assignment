import { useEffect, useState } from "react";
import * as S from "./rankingPage.styles";
import { GameRecord } from "./types";
import { clearRecords, getRecords } from "./storage";

export default function RankingPage() {
  const [records, setRecords] = useState<GameRecord[]>([]);

  useEffect(() => {
    setRecords(getRecords());
  }, []);

  const sorted = [...records].sort((a, b) => {
    if (b.level !== a.level) return b.level - a.level;
    return a.playTime - b.playTime;
  });

  const handleReset = () => {
    clearRecords();
    setRecords([]);
  };

  return (
    <S.RankingWrapper>
      <S.RankingHeaderRow>
        <S.RankingTitle>랭킹 🏆</S.RankingTitle>
        <S.ResetButton onClick={handleReset}>초기화</S.ResetButton>
      </S.RankingHeaderRow>
      {sorted.length === 0 ? (
        <S.Empty>기록이 없습니다. 게임을 플레이해보세요!</S.Empty>
      ) : (
        <S.Table>
          <thead>
            <tr>
              <S.Th>순위</S.Th>
              <S.Th>레벨</S.Th>
              <S.Th>플레이 시간</S.Th>
              <S.Th>기록 시각</S.Th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((record, idx) => (
              <tr key={record.id}>
                <S.Td>{idx + 1}</S.Td>
                <S.Td>Level {record.level}</S.Td>
                <S.Td>{record.playTime.toFixed(2)}초</S.Td>
                <S.Td>{record.playedAt}</S.Td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      )}
    </S.RankingWrapper>
  );
}
