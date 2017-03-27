export interface ConversationListItem {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  info?: string;
  read?: boolean;
  update?: Date;
  active?: boolean;
  highlight?: boolean;
  initials?: string;
  color?: string;
}
