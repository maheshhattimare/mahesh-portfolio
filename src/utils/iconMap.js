// utils/iconMap.js
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaStackOverflow,
  FaDev,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter, FaReddit, FaDiscord } from "react-icons/fa6";
import { BsTelegram, BsMedium } from "react-icons/bs";
import { AiFillSlackCircle } from "react-icons/ai";
import { IoLogoTwitch } from "react-icons/io";

export const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  youtube: FaYoutube,
  twitter: FaTwitter,
  x: FaXTwitter,
  reddit: FaReddit,
  telegram: BsTelegram,
  medium: BsMedium,
  dribbble: FaDribbble,
  behance: FaBehance,
  slack: AiFillSlackCircle,
  discord: FaDiscord,
  twitch: IoLogoTwitch,
  stackoverflow: FaStackOverflow,
  dev: FaDev,
  website: FaGlobe,
};
