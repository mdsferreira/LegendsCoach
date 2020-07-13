export interface ITeam {
  _id: null | string;
  name: string;
  logo: ILogo;
  points: number;
}

export interface ILogo {
  _id: null | string;
  badge: number;
  badgeColor: string;
  logo: number;
  logoColor: string;
}

export type IStatus = '' | 'valid' | 'saved' | 'error';

export const createTeamBackend = team => {
  return {
    name: team.name,
    badge: team.badge._id,
    badge_color: team.badge.color,
    logo: team.logo._id,
    logo_color: team.logo.color,
  };
};

export const createLogo = LogoBackend => {
  return {
    _id: LogoBackend._id,
    badge: LogoBackend.badge,
    badgeColor: LogoBackend.badge_color,
    logo: LogoBackend.logo,
    logoColor: LogoBackend.logo_color,
  };
};

export const createTeam = teamBackend => {
  return {
    _id: teamBackend._id,
    name: teamBackend.name,
    logo: createLogo(teamBackend.logo),
    user: teamBackend.user,
  };
};
