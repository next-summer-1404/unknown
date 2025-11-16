export interface ICommentsParams {
  house_id: number;          
  user_id: number | null;          
  title: string;               
  caption: string;            
  rating: number | null;             
  parent_comment_id: number | null;   
}
