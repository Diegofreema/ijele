'use server';

import TicketEmail from '@/emails';
import { BuyType } from '@/types';
import { transporter } from '@/utils/nodemailer';
import { createClient } from '@/utils/supabase/server';
import { render } from '@react-email/components';
import { format } from 'date-fns';

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

export const buyTicket = async (values: BuyType) => {
  const suapabase = createClient();
  const { data, error } = await suapabase
    .from('ticket')
    .insert({
      name: values.name,
      match_id: values.id,
      phone: values.phone,
      email: values.email,
      ticket_type: values.type,
    })
    .select('*,match_id(*)')
    .single();

  if (error) {
    console.log(error);

    return { message: 'failed' };
  }

  if (data) {
    console.log(data?.match_id);

    const { error } = await suapabase
      .from('matches')
      .update({ ticket_available: data.match_id.ticket_available - 1 })
      .eq('id', values.id);
    const emailHtml = render(
      TicketEmail({
        name: values.name,
        price: data?.match_id.ticket_price as string,
        venue: data?.match_id?.venue as string,
        ticketId: data?.ticketId as string,
        matchDate: data.match_id.date_of_match,
        awayImage: data.match_id.away_team_image,
        awayTeam: data?.match_id.away_team,
        homeImage: data?.match_id.home_team_img,
        homeTeam: data?.match_id.home_team,
        kickoff: data?.match_id.kick_off,
        phone: values.phone,
        ticketType: values.type,
      })
    );

    const options = {
      from: `Diego from Ijele SC <${process.env.USER}>`,
      to: values.email,
      subject: 'Ticket Purchase',
      html: emailHtml,
    };

    const res = await transporter.sendMail(options);
    console.log(res);

    return { message: 'success' };
  }

  return { message: 'failed' };
};
