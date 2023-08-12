const { BadRequestError } = require("../expressError");

/**
 * Helper for making selective update queries.
 *
 * The calling function can use it to make the SET clause of an SQL UPDATE
 * statement.
 *
 * @param dataToUpdate {Object} {field1: newVal, field2: newVal, ...}
 * @param jsToSql {Object} maps js-style data fields to database column names,
 *   like { email: "email", image_profile: "image_profile" }
 *
 * @returns {Object} {sqlSetCols, dataToUpdate}
 *
 * @example {image_profile: 'src1'} =>
 *   { setCols: '"image_profile"=$1',
 *     values: ['src1'] }
*/

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
    
    const keys = Object.keys(dataToUpdate);
    
    if (keys.length === 0) throw new BadRequestError("No data");

    // {image_profile: 'src1'} => ['image_profile=$1']
    const cols = keys.map((colName, idx) =>
        `"${jsToSql[colName] || colName}" = $${idx + 1}`,
    );

    // console.log(dataToUpdate)
    // console.log(jsToSql)
    // console.log(cols)
    // console.log(cols.join(", "))
    
    return {
        setCols: cols.join(", "),
        values: Object.values(dataToUpdate),
    };
}

module.exports = { sqlForPartialUpdate }