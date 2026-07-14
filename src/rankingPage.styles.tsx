import styled from '@emotion/styled';

export const RankingWrapper = styled.div`
  padding: 40px 24px;
  max-width: 640px;
  margin: 0 auto;
`;

export const RankingHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const RankingTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const ResetButton = styled.button`
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.textInverse};
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  padding: 8px 16px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textInverse};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Td = styled.td`
  padding: 10px 16px;
  border-bottom: 1px solid #eee;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Empty = styled.p`
  text-align: center;
  padding: 40px 0;
  color: #888;
`;
