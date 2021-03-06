angular.module('splatApp').skills = function ($scope) {
  $scope.skills = [
    {
      name:"Ink Saver (Main)",
      localizedName: {
        "ja_JP": "インク効率アップ（メイン）",
        "en_US": "Ink Saver (Main)",
        "en_GB": "Ink Saver (Main)",
        "es_ES": "Tintahorro (ppal.)",
        "es_MX": "Ahorro tinta (ppal.)",
        "fr_FR": "Encrémenteur (pr.)",
        "fr_CA": "Encrémenteur (pr.)",
        "de_DE": "Hauptverbrauch"
      },
      image:"../common/assets/img/skills/MainInk_Save.png",
      id: 1
    },
    {
      name:"Ink Saver (Sub)",
      localizedName: {
        "ja_JP": "インク効率アップ（サブ）",
        "en_US": "Ink Saver (Sub)",
        "en_GB": "Ink Saver (Sub)",
        "es_ES": "Tintahorro (sec.)",
        "es_MX": "Ahorro tinta (sec.)",
        "fr_FR": "Encrémenteur (sec.)",
        "fr_CA": "Encrémenteur (sec.)",
        "de_DE": "Sekundärverbrauch"
      },
      image:"../common/assets/img/skills/SubInk_Save.png",
      id: 2
    },
    {
      name:"Ink Recovery Up",
      localizedName: {
        "ja_JP": "インク回復力アップ",
        "en_US": "Ink Recovery Up",
        "en_GB": "Ink Recovery Up",
        "es_ES": "Recarga rápida",
        "es_MX": "Mejor recarga tinta",
        "fr_FR": "Levée d'encre",
        "fr_CA": "Levée d'encre",
        "de_DE": "Regeneration +"
      },
      image:"../common/assets/img/skills/InkRecovery_Up.png",
      id: 3
    },
    {
      name:"Run Speed Up",
      localizedName: {
        "ja_JP": "ヒト移動速度アップ",
        "en_US": "Run Speed Up",
        "en_GB": "Run Speed Up",
        "es_ES": "Supercarrera",
        "es_MX": "Carrera acelerada",
        "fr_FR": "Course à pied",
        "fr_CA": "Course à pied",
        "de_DE": "Lauftempo +"
      },
      image:"../common/assets/img/skills/HumanMove_Up.png",
      id: 4
    },
    {
      name:"Swim Speed Up",
      localizedName: {
        "ja_JP": "イカダッシュ速度アップ",
        "en_US": "Swim Speed Up",
        "en_GB": "Swim Speed Up",
        "es_ES": "Superbuceo",
        "es_MX": "Nado acelerado",
        "fr_FR": "Turbo-calamar",
        "fr_CA": "Turbo-calmar",
        "de_DE": "Schwimmtempo +"
      },
      image:"../common/assets/img/skills/SquidMove_Up.png",
      id: 5
    },
    {
      name:"Quick Super Jump",
      localizedName: {
        "ja_JP": "スーパージャンプ時間短縮",
        "en_US": "Quick Super Jump",
        "en_GB": "Quick Super Jump",
        "es_ES": "Supersalto rápido",
        "es_MX": "Supersalto rápido",
        "fr_FR": "Aérodynamisme",
        "fr_CA": "Aérodynamisme",
        "de_DE": "Supersprung +"
      },
      image:"../common/assets/img/skills/JumpTime_Save.png",
      id: 6
    },
    {
      name:"Ink Resistance Up",
      localizedName: {
        "ja_JP": "相手インク影響軽減",
        "en_US": "Ink Resistance Up",
        "en_GB": "Ink Resistance Up",
        "es_ES": "Impermeabilidad",
        "es_MX": "Impermeabilidad",
        "fr_FR": "Pieds au sec",
        "fr_CA": "Imperméabilité",
        "de_DE": "Tintentoleranz +"
      },
      image:"../common/assets/img/skills/OpInkEffect_Reduction.png",
      id: 7
    },
    {
      name:"Bomb Defense Up",
      localizedName: {
        "ja_JP": "爆風ダメージ軽減",
        "en_US": "Bomb Defense Up",
        "en_GB": "Bomb Defense Up",
        "es_ES": "Resistencia explosiva",
        "es_MX": "Antiexplosivos",
        "fr_FR": "Filtre à explosions",
        "fr_CA": "Filtre à explosions",
        "de_DE": "Bombenschutz"
      },
      image:"../common/assets/img/skills/BombDamage_Reduction.png",
      id: 8
    },
    {
      name:"Cold-Blooded",
      localizedName: {
        "ja_JP": "マーキング時間短縮",
        "en_US": "Cold-Blooded",
        "en_GB": "Cold-Blooded",
        "es_ES": "Invisibilidad",
        "es_MX": "Sangre fría",
        "fr_FR": "Furtivité",
        "fr_CA": "Furtivité",
        "de_DE": "Phantom"
      },
      image:"../common/assets/img/skills/MarkingTime_Reduction.png",
      id: 9
    },
    {
      name:"Quick Respawn",
      localizedName: {
        "ja_JP": "復活時間短縮",
        "en_US": "Quick Respawn",
        "en_GB": "Quick Respawn",
        "es_ES": "Retorno exprés",
        "es_MX": "Regeneración rapida",
        "fr_FR": "Sans temps morts",
        "fr_CA": "Sans temps mort",
        "de_DE": "Schnelle Rückkehr"
      },
      image:"../common/assets/img/skills/RespawnTime_Save.png",
      id: 10
    },
    {
      name:"Special Charge Up",
      localizedName: {
        "ja_JP": "スペシャル増加量アップ",
        "en_US": "Special Charge Up",
        "en_GB": "Special Charge Up",
        "es_ES": "Recarga especial",
        "es_MX": "Recarga especial",
        "fr_FR": "Jauge spéciale +",
        "fr_CA": "Jauge spéciale +",
        "de_DE": "Spezialladezeit +"
      },
      image:"../common/assets/img/skills/SpecialIncrease_Up.png",
      id: 11
    },
    {
      name:"Special Saver",
      localizedName: {
        "ja_JP": "スペシャル減少量ダウン",
        "en_US": "Special Saver",
        "en_GB": "Special Saver",
        "es_ES": "Reducción especial",
        "es_MX": "Ahorro en especial",
        "fr_FR": "Baisse spéciale -",
        "fr_CA": "Baisse spéciale -",
        "de_DE": "Spezialabzug -"
      },
      image:"../common/assets/img/skills/RespawnSpecialGauge_Save.png",
      id: 12
    },
    {
      name:"Special Power Up",
      localizedName: {
        "ja_JP": "スペシャル性能アップ",
        "en_US": "Special Power Up",
        "en_GB": "Special Power Up",
        "es_ES": "Superarma especial",
        "es_MX": "Mejora especial",
        "fr_FR": "Arme spéciale +",
        "fr_CA": "Arme spéciale +",
        "de_DE": "Spezialstärke +"
      },
      image:"../common/assets/img/skills/SpecialTime_Up.png",
      id: 13
    },
    {
      name:"Sub Power Up",
      localizedName: {
        "ja_JP": "サブ性能アップ",
        "en_US": "Sub Power Up",
        "en_GB": "Sub Power Up",
        "es_ES": "Superarma secundaria",
        "es_MX": "Mejora secundaria",
        "fr_FR": "Arme secondaire +",
        "fr_CA": "Arme secondaire +",
        "de_DE": "Sekundärstärke +"
      },
      image:"../common/assets/img/skills/BombDistance_Up.png",
      id: 14
    },
    {
      name:"Opening Gambit",
      localizedName: {
        "ja_JP": "スタートダッシュ",
        "en_US": "Opening Gambit",
        "en_GB": "Opening Gambit",
        "es_ES": "Acelerón de salida",
        "es_MX": "Acelerón de salida",
        "fr_FR": "Chapeaux de roue",
        "fr_CA": "Départ toute allure",
        "de_DE": "Startvorteil"
      },
      image:"../common/assets/img/skills/StartAllUp.png",
      exclusive:"loadout.head.main",
      id: 15
    },
    {
      name:"Last-Ditch Effort",
      localizedName: {
        "ja_JP": "ラストスパート",
        "en_US": "Last-Ditch Effort",
        "en_GB": "Last-Ditch Effort",
        "es_ES": "Sprint Final",
        "es_MX": "Último recurso",
        "fr_FR": "Ultime sursaut",
        "fr_CA": "Ultime sursaut",
        "de_DE": "Endspurt"
      },
      image:"../common/assets/img/skills/EndAllUp.png",
      exclusive:"loadout.head.main",
      id: 16
    },
    {
      name:"Comeback",
      localizedName: {
        "ja_JP": "カムバック",
        "en_US": "Comeback",
        "en_GB": "Comeback",
        "es_ES": "Remontada",
        "es_MX": "Remonte",
        "fr_FR": "Come-back",
        "fr_CA": "Retour",
        "de_DE": "Rückkehr"
      },
      image:"../common/assets/img/skills/ComeBack.png",
      exclusive:"loadout.head.main",
      id: 17
    },
    {
      name:"Tenacity",
      localizedName: {
        "ja_JP": "逆境強化",
        "en_US": "Tenacity",
        "en_GB": "Tenacity",
        "es_ES": "Ventaja",
        "es_MX": "Tenacidad",
        "fr_FR": "Ténacité",
        "fr_CA": "Ténacité",
        "de_DE": "Zähigkeit"
      },
      image:"../common/assets/img/skills/MinorityUp.png",
      exclusive:"loadout.head.main",
      id: 18
    },
    {
      name:"Thermal Ink",
      localizedName: {
        "ja_JP": "サーマルインク",
        "en_US": "Thermal Ink",
        "en_GB": "Thermal Ink",
        "es_ES": "Señuelo",
        "es_MX": "Tinta rastreadora",
        "fr_FR": "Encre thermique",
        "fr_CA": "Encre thermique",
        "de_DE": "Markierfarbe"
      },
      image:"../common/assets/img/skills/ThermalInk.png",
      exclusive:"loadout.clothes.main",
      id: 19
    },
    {
      name:"Ninja Squid",
      localizedName: {
        "ja_JP": "イカニンジャ",
        "en_US": "Ninja Squid",
        "en_GB": "Ninja Squid",
        "es_ES": "Ninjalamar",
        "es_MX": "Ninjalamar",
        "fr_FR": "Ninjalamar",
        "fr_CA": "Ninjalmar",
        "de_DE": "Tintenfisch-Ninja"
      },
      image:"../common/assets/img/skills/SquidMoveSpatter_Reduction.png",
      exclusive:"loadout.clothes.main",
      id: 20
    },
    {
      name:"Haunt",
      localizedName: {
        "ja_JP": "リベンジ",
        "en_US": "Haunt",
        "en_GB": "Haunt",
        "es_ES": "Represalia",
        "es_MX": "Resentimiento",
        "fr_FR": "Revanche",
        "fr_FR": "Vengeance",
        "de_DE": "Vertgeltung"
      },
      image:"../common/assets/img/skills/DeathMarking.png",
      exclusive:"loadout.clothes.main",
      id: 21
    },
    {
      name:"Respawn Punisher",
      localizedName: {
        "ja_JP": "復活ペナルティアップ",
        "en_US": "Respawn Punisher",
        "en_GB": "Respawn Punisher",
        "es_ES": "Castigo póstumo",
        "es_MX": "Castigo póstumo",
        "fr_FR": "Retour perdant",
        "fr_CA": "Retour perdant",
        "de_DE": "Heimsuchung"
      },
      image:"../common/assets/img/skills/Exorcist.png",
      exclusive:"loadout.clothes.main",
      id: 22
    },
    {
      name:"Drop Roller",
      localizedName: {
        "ja_JP": "受け身術",
        "en_US": "Drop Roller",
        "en_GB": "Drop Roller",
        "es_ES": "Amortiguador",
        "es_MX": "Aterrizaje rodante",
        "fr_FR": "Super roulade",
        "fr_FR": "Super roulade",
        "de_DE": "Tricklandung"
      },
      image:"../common/assets/img/skills/SomersaultLanding.png",
      exclusive:"loadout.shoes.main",
      id: 23
    },
    {
      name:"Stealth Jump",
      localizedName: {
        "ja_JP": "ステルスジャンプ",
        "en_US": "Stealth Jump",
        "en_GB": "Stealth Jump",
        "es_ES": "Supersalto invisible",
        "es_MX": "Supersalto invisible",
        "fr_FR": "Réception réussie",
        "fr_CA": "Super saut invisible",
        "de_DE": "Sprunginfiltration"
      },
      image:"../common/assets/img/skills/SuperJumpSign_Hide.png",
      exclusive:"loadout.shoes.main",
      id: 24
    },
    {
      name:"Object Shredder",
      localizedName: {
        "ja_JP": "対物攻撃力アップ",
        "en_US": "Object Shredder",
        "en_GB": "Object Shredder",
        "es_ES": "Demolición",
        "es_MX": "Demolición",
        "fr_FR": "Démolition",
        "fr_FR": "Démolition",
        "de_DE": "Zerstörer"
      },
      image:"../common/assets/img/skills/ObjectEffect_Up.png",
      exclusive:"loadout.shoes.main",
      id: 25
    }
  ]
  $scope.getSkillByName = function(name) {
    return $scope.skills.filter(function(skill) {
      return skill.name == name;
    })[0]
  }

  $scope.getSkillById = function(skillid) {
    var results = $scope.skills.filter(function(skill) {
      return skill.id == skillid
    })[0]
    if(results == undefined) {
      return null;
    }
    else return results;
  }

  $scope.getExclusiveSkills = function(slot) {
    return $scope.skills.filter(function(skill) {
      if(skill.exclusive) return true;
    })
  }

  $scope.getStackableSkills = function() {
    return $scope.skills.filter(function(skill) {
      if(!skill.exclusive) return true;
    })
  }


}
