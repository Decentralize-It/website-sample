const conn = require('./conn');

const LINK = {
    add: (title, numTokens, link) => conn.one(`INSERT INTO links (title, num-tokens, link) VALUES ($1, $2, $3) RETURNING *`, [title, numTokens, link]),
    update: (id, title, numTokens, link, isExpired) => conn.one(`UPDATE links SET title=$2, num-tokens=$3, link=$4, is-expired=$5 WHERE id=$1 RETURNING *` [id, title, numTokens, link, isExpired]),
};

module.exports = LINK