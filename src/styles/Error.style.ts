import styled from 'styled-components';

export  const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

export const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const ErrorTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1.5rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
`;

export const HomeLink = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;



export const EmptyPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 50%;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 32px;
`;


export const EmptyPlaylistTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 12px;
`;

export const EmptyPlaylistText = styled.p`
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 24px;
`;

export const CreateMusicButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  svg {
    margin-right: 8px;
  }
`;