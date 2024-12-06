export type ButtonThemeType =
  | 'container-primary'
  | 'container-danger'
  | 'outline-primary'
  | 'ghost-primary'
  | 'ghost-default';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'small';
  pill?: boolean;
  theme?: ButtonThemeType;
  startIcon?: string;
  endIcon?: string;
  isLoading?: boolean;
}
