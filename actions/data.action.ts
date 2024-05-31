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
export const getRelatedNews = async (cat: string, id: number) => {
  const suapabase = createClient();

  const { data, error } = await suapabase
    .from('news')
    .select()
    .limit(5)
    .neq('id', id)
    .eq('category', cat);
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

export const getTotalPlayers = async () => {
  const suapabase = createClient();
  const { count, error } = await suapabase
    .from('men')
    .select('*', { count: 'exact', head: true });
  if (error) {
    throw new Error(error.message);
  }

  return {
    numberOfPlayers: count,
  };
};

export const getTotalNews = async () => {
  const suapabase = createClient();
  const { count, error } = await suapabase
    .from('news')
    .select('*', { count: 'exact', head: true });
  if (error) {
    console.log('fdsfds', error);
    throw new Error(error.message);
  }

  return {
    numberOfArticles: count,
  };
};
export const getProducts = async (page: number = 1) => {
  const suapabase = createClient();
  const limit = 10;
  const offset = page * limit;
  const { data, error } = await suapabase
    .from('products')
    .select()
    .limit(offset);
  if (error) {
    console.log('fdsfds', error);

    throw new Error(error.message);
  }

  return data;
};
export const getTotalProducts = async () => {
  const suapabase = createClient();
  const { count, error } = await suapabase
    .from('products')
    .select('*', { count: 'exact', head: true });
  if (error) {
    throw new Error(error.message);
  }

  return count;
};
export const getAllMatches = async (page: number = 1) => {
  const suapabase = createClient();
  const limit = 10;
  const offset = page * limit;
  const { data, error } = await suapabase
    .from('matches')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(offset);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
export const getTotalImages = async () => {
  const suapabase = createClient();
  const { count, error } = await suapabase
    .from('images')
    .select('*', { count: 'exact', head: true });
  if (error) {
    throw new Error(error.message);
  }

  return {
    numberOfImages: count,
  };
};
export const getTotalVideos = async () => {
  const suapabase = createClient();
  const { count, error } = await suapabase
    .from('videos')
    .select('*', { count: 'exact', head: true });
  if (error) {
    throw new Error(error.message);
  }

  return {
    numberOfVideos: count,
  };
};
export const getTotalMatches = async () => {
  const suapabase = createClient();
  const { count, error } = await suapabase
    .from('matches')
    .select('*', { count: 'exact', head: true });
  if (error) {
    throw new Error(error.message);
  }

  return count;
};
