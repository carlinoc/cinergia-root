import { Dispatch, SetStateAction } from 'react';

export interface MyListPreviewProps {
  handleMyListState: Dispatch<SetStateAction<boolean>>;
  myListState: boolean;
}

export interface MyListCardProps {
  movie: MovieUserList;
  handleMyListState: Dispatch<SetStateAction<boolean>>;
}
