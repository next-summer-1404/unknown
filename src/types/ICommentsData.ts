export interface ICommentsData {
  house_id: number;          
  user_id: number | null;          
  title: string;               
  caption: string;            
  rating: number;             
  parent_comment_id: number | null;   
}