export type IResult = 'success' | 'fail' | null;

export interface IResultModal {
  result: IResult;
  modalOpen: boolean;
  handleModalClose: () => void;
}
