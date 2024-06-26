import { Database } from './supabase';

export type MatchesType = Database['public']['Tables']['matches']['Row'];

export type ImageType = Database['public']['Tables']['images']['Row'];
export type VideoType = Database['public']['Tables']['videos']['Row'];
export type NewsType = Database['public']['Tables']['news']['Row'];
export type ProductType = Database['public']['Tables']['products']['Row'];
export type PlayersType =
  Database['public']['Tables']['players_statistics']['Row'];
export type MenType = Database['public']['Tables']['men']['Row'];

export type PType = {
  description: string;
  id?: number;
  image_url: string;
  number_in_stock: number;
  price: number;
  product_name: string;
};
export type MatchResult = Database['public']['Enums']['RESULT'];
export type PositionEnum = Database['public']['Enums']['ROLE'];
export type MatchType = {
  attendance: number;
  away_score: number;
  away_team: string;
  away_team_img: string;

  date_of_match: string;
  home_score: number;
  home_team: string;
  home_team_img: string;
  kick_off: string;
  match_result: MatchResult;
  ref_name: string;
  venue: string;
};

export type TypeMen = {
  age: string;
  bio: string;
  contract_end_date: string;
  contract_start_date: string;
  contract_type: string;
  first_name: string;
  height: string;
  image_url: string;
  injured: boolean;
  last_name: string;
  leave: boolean;
  jersey_number: number;
  lga: string;
  nationality: string;
  second_position: string;
  position: PositionEnum;
  middle_name: string;
  skills_description: string;
  wage_per_week: number;
  suspended: boolean;
  loan_away: boolean;
  loan_home: boolean;
  state_of_orgin: string;
  weight: string;
};
