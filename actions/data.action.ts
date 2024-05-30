'use server';

import { createClient } from '@/utils/supabase/server';

export const getNews = async (page: number = 1) => {
  const suapabase = createClient();
  const limit = 10;
  const offset = page * limit;
  const { data, error } = await suapabase.from('news').select().limit(offset);
  if (error) {
    console.log('fdsfds', error);

    throw new Error(error.message);
  }

  return data;
};

export const getPlayers = async (page: number = 1) => {
  const suapabase = createClient();
  const limit = 10;
  const offset = page * limit;
  const { data, error } = await suapabase.from('men').select().limit(offset);
  if (error) {
    console.log('fdsfds', error);

    throw new Error(error.message);
  }

  return data;
};
export const getSingleNews = async (id: any) => {
  const suapabase = createClient();

  const { data, error } = await suapabase
    .from('news')
    .select()
    .eq('id', id)
    .single();
  if (error) {
    return { message: 'Article not found' };
  }

  return data;
};
export const getSinglePlayer = async (id: any) => {
  const suapabase = createClient();

  const { data, error } = await suapabase
    .from('men')
    .select()
    .eq('id', id)
    .single();
  if (error) {
    return { message: 'Player not found' };
  }

  return data;
};
export const getVideos = async (page: number = 1) => {
  const suapabase = createClient();
  const limit = 10;
  const offset = page * limit;
  const { data, error } = await suapabase.from('videos').select().limit(offset);
  if (error) {
    console.log('fdsfds', error);

    throw new Error(error.message);
  }

  return {
    data,
  };
};

export const getImages = async (page: number = 1) => {
  const suapabase = createClient();
  const limit = 10;
  const offset = page * limit;
  const { data, error } = await suapabase.from('images').select().limit(offset);
  if (error) {
    console.log('fdsfds', error);

    throw new Error(error.message);
  }

  return data;
};
