CREATE DATABASE turtlegame;

CREATE TABLE testgame(
    game_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
)


SELECT 
"userName", 
SUM("score")::DECIMAL as total_score,
COUNT('id')::DECIMAL as total_games,
ROUND((SUM("score")::DECIMAL)/(COUNT('id')::DECIMAL),3) as ratio
FROM "Games" group by "userName" order by ratio DESC; 


WITH players as (
    SELECT "userName", "score"
    FROM "Games"
    GROUP BY "userName", "score"
)

SELECT 
    -- SUM(score) as "total_score",
    -- (SELECT COUNT('id') as total_games from "Games")
    ROUND(CAST (float8 (SUM(score)*1000/ (SELECT COUNT('id') as total_games from "Games"))as numeric),4) as "percent"
    FROM players;

SELECT 
    "userName",
    COUNT('id')
    WHERE "score" = 6
    FROM "Games" group by "userName" order by COUNT DESC;