import { IScoring } from './Scoring';

/**
 * Roster positions.
 * Flex encompasses multiple other positions. ? is an unknown position
 * for an empty position on the Bench
 */
export type Position =
  | 'QB'
  | 'RB'
  | 'WR'
  | 'FLEX'
  | 'TE'
  | 'DST'
  | 'K'
  | 'BENCH'
  | '?';

/**
 * A single player. Extends the scoring metrics from IScoring. All optional
 * parameters are set client-side and are based on roster and league scoring
 * settings.
 */
export interface IPlayer extends IScoring {
  index: number;
  key: string;
  name: string;
  pos: Position;
  team: string;
  bye: number;

  /**
   * average draft position based on PPR vs standard and league size
   */
  adp8Ppr: number;
  adp8Standard: number;
  adp10Ppr: number;
  adp10Standard: number;
  adp12Ppr: number;
  adp12Standard: number;
  adp14Ppr: number;
  adp14Standard: number;

  /**
   * forecasted number of points. Multiple each of the player's
   * stats by the number of points assigned to each
   */
  forecast?: number;

  /**
   * Player's ADP based on whether on the number of teams and
   * whether the league's scoring is PPR
   */
  adp?: number;

  /**
   * Player's value over other players in the same position
   *
   * Is a function of the number of teams and number of players
   * in that position drafted within the first 10 rounds
   */
  vor?: number;

  /**
   * First initial and last name of each player. Not set on initial
   * load (with forecast payload), but is computed once
   *
   * Used because (based on Reddit feedback) it makes it easier to
   * draft players
   */
  tableName?: string;
  href?: string;
}
