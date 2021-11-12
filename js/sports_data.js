const sportsData = [
    {
    "key": "americanfootball_ncaaf",
    "group": "American Football",
    "title": "NCAAF",
    "description": "US College Football",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "americanfootball_nfl",
    "group": "American Football",
    "title": "NFL",
    "description": "US Football",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "americanfootball_nfl_super_bowl_winner",
    "group": "American Football",
    "title": "NFL Super Bowl Winner",
    "description": "Super Bowl Winner 2021/2022",
    "active": true,
    "has_outrights": true
    },
    {
    "key": "baseball_mlb_world_series_winner",
    "group": "Baseball",
    "title": "MLB World Series Winner",
    "description": "World Series Winner 2022",
    "active": true,
    "has_outrights": true
    },
    {
    "key": "basketball_euroleague",
    "group": "Basketball",
    "title": "Basketball Euroleague",
    "description": "Basketball Euroleague",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "basketball_nba",
    "group": "Basketball",
    "title": "NBA",
    "description": "US Basketball",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "basketball_nba_championship_winner",
    "group": "Basketball",
    "title": "NBA Championship Winner",
    "description": "Championship Winner 2021/2022",
    "active": true,
    "has_outrights": true
    },
    {
    "key": "basketball_ncaab",
    "group": "Basketball",
    "title": "NCAAB",
    "description": "US College Basketball",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "cricket_test_match",
    "group": "Cricket",
    "title": "Test Matches",
    "description": "International Test Matches",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "golf_masters_tournament_winner",
    "group": "Golf",
    "title": "Masters Tournament Winner",
    "description": "2022 Winner",
    "active": true,
    "has_outrights": true
    },
    {
    "key": "golf_pga_championship_winner",
    "group": "Golf",
    "title": "PGA Championship Winner",
    "description": "2022 Winner",
    "active": true,
    "has_outrights": true
    },
    {
    "key": "golf_the_open_championship_winner",
    "group": "Golf",
    "title": "The Open Winner",
    "description": "2022 Winner",
    "active": true,
    "has_outrights": true
    },
    {
    "key": "golf_us_open_winner",
    "group": "Golf",
    "title": "US Open Winner",
    "description": "2022 Winner",
    "active": true,
    "has_outrights": true
    },
    {
    "key": "icehockey_nhl",
    "group": "Ice Hockey",
    "title": "NHL",
    "description": "US Ice Hockey",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "icehockey_nhl_championship_winner",
    "group": "Ice Hockey",
    "title": "NHL Championship Winner",
    "description": "Stanley Cup Winner 2021/2022",
    "active": true,
    "has_outrights": true
    },
    {
    "key": "icehockey_sweden_allsvenskan",
    "group": "Ice Hockey",
    "title": "HockeyAllsvenskan",
    "description": "Swedish Hockey Allsvenskan",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "icehockey_sweden_hockey_league",
    "group": "Ice Hockey",
    "title": "SHL",
    "description": "Swedish Hockey League",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "mma_mixed_martial_arts",
    "group": "Mixed Martial Arts",
    "title": "MMA",
    "description": "Mixed Martial Arts",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "rugbyleague_nrl",
    "group": "Rugby League",
    "title": "NRL",
    "description": "Aussie Rugby League",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_australia_aleague",
    "group": "Soccer",
    "title": "A-League",
    "description": "Aussie Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_belgium_first_div",
    "group": "Soccer",
    "title": "Belgium First Div",
    "description": "Belgian First Division A",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_brazil_campeonato",
    "group": "Soccer",
    "title": "Brazil Série A",
    "description": "Brasileirão Série A",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_denmark_superliga",
    "group": "Soccer",
    "title": "Denmark Superliga",
    "description": "",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_efl_champ",
    "group": "Soccer",
    "title": "Championship",
    "description": "EFL Championship",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_england_efl_cup",
    "group": "Soccer",
    "title": "EFL Cup",
    "description": "League Cup",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_england_league1",
    "group": "Soccer",
    "title": "League 1",
    "description": "EFL League 1",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_england_league2",
    "group": "Soccer",
    "title": "League 2",
    "description": "EFL League 2 ",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_epl",
    "group": "Soccer",
    "title": "EPL",
    "description": "English Premier League",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_france_ligue_one",
    "group": "Soccer",
    "title": "Ligue 1 - France",
    "description": "",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_france_ligue_two",
    "group": "Soccer",
    "title": "Ligue 2 - France",
    "description": "French Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_germany_bundesliga",
    "group": "Soccer",
    "title": "Bundesliga - Germany",
    "description": "German Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_germany_bundesliga2",
    "group": "Soccer",
    "title": "Bundesliga 2 - Germany",
    "description": "German Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_italy_serie_a",
    "group": "Soccer",
    "title": "Serie A - Italy",
    "description": "Italian Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_italy_serie_b",
    "group": "Soccer",
    "title": "Serie B - Italy",
    "description": "Italian Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_japan_j_league",
    "group": "Soccer",
    "title": "J League",
    "description": "Japan Soccer League",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_korea_kleague1",
    "group": "Soccer",
    "title": "K League 1",
    "description": "Korean Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_league_of_ireland",
    "group": "Soccer",
    "title": "League of Ireland",
    "description": "Airtricity League Premier Division",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_netherlands_eredivisie",
    "group": "Soccer",
    "title": "Dutch Eredivisie",
    "description": "Dutch Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_norway_eliteserien",
    "group": "Soccer",
    "title": "Eliteserien - Norway",
    "description": "Norwegian Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_portugal_primeira_liga",
    "group": "Soccer",
    "title": "Primeira Liga - Portugal",
    "description": "Portugese Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_russia_premier_league",
    "group": "Soccer",
    "title": "Premier League - Russia",
    "description": "Russian Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_spain_la_liga",
    "group": "Soccer",
    "title": "La Liga - Spain",
    "description": "Spanish Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_spain_segunda_division",
    "group": "Soccer",
    "title": "La Liga 2 - Spain",
    "description": "Spanish Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_spl",
    "group": "Soccer",
    "title": "Premiership - Scotland",
    "description": "Scottish Premiership",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_sweden_allsvenskan",
    "group": "Soccer",
    "title": "Allsvenskan - Sweden",
    "description": "Swedish Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_sweden_superettan",
    "group": "Soccer",
    "title": "Superettan - Sweden",
    "description": "Swedish Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_switzerland_superleague",
    "group": "Soccer",
    "title": "Swiss Superleague",
    "description": "Swiss Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_turkey_super_league",
    "group": "Soccer",
    "title": "Turkey Super League",
    "description": "Turkish Soccer",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_uefa_champs_league",
    "group": "Soccer",
    "title": "UEFA Champions",
    "description": "European Champions League",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_uefa_europa_league",
    "group": "Soccer",
    "title": "UEFA Europa",
    "description": "European Europa League",
    "active": true,
    "has_outrights": false
    },
    {
    "key": "soccer_usa_mls",
    "group": "Soccer",
    "title": "MLS",
    "description": "Major League Soccer",
    "active": true,
    "has_outrights": false
    }
    ]