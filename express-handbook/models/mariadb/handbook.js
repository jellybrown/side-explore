module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'TB_HANDBOOK',
    {
      // 시퀄라이즈는 기본적으로 id를 기본키로 연결하므로 id 컬럼은 적지 않아도 됨
      category: {
        type: DataTypes.STRING(100), // VARCHAR -> STRING
        allowNull: false, // NOT NULL -> allowNull
        unique: true, // UNIQUE -> unique
      },
      title: {
        type: DataTypes.STRING(100), // INT -> INTEGER
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING, // TINYINT -> BOOLEAN
        allowNull: false,
      },
      erdat: {
        type: DataTypes.DATE, // TEXT = TEXT
        allowNull: false,
        defaultValue: sequelize.literal('now()'),
      },
      aedat: {
        type: DataTypes.DATE, // DATETIME -> DATE
        allowNull: false,
        defaultValue: sequelize.literal('now()'),
      },
    },

    /* 세번째 인자: 테이블 옵션 */
    {
      freezeTableName: true,
      timestamps: false, // true 시 시퀄라이즈는 자동으로 createdAt과 updateAt 컬럼 추가
    });
};
