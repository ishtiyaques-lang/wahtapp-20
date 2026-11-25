const AGENTS = {
  shruti: {
    name:"Shruti_J", initials:"SJ", color:"#0891b2",
    cq:93, audits:4, ncf:0, totalErrors:4,
    params:{open:0, prob:0, sales:1, ss:3, close:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 3 of 4 chats this month. Example: on a \"SKU related query\" chat, personalization - taking Cx name atleast 3 times max 4. Focus on this consistently across chats."},
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 1 of 4 chats this month. Example: on a \"SKU related query\" chat, attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. Focus on this consistently across chats."},
    ],
    cases:[
      {query:"SKU related query", score:80, comment:"AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. AOI — Soft Skills: Personalization - taking Cx name atleast 3 times max 4."},
      {query:"Jewellery Selection", score:100, comment:"Good work!!"},
      {query:"Jewellery Selection", score:95, comment:"AOI — Soft Skills needs improvement."},
      {query:"Jewellery Selection", score:95, comment:"AOI — Soft Skills needs improvement."},
    ],
    paramCaseMap:{open:[], prob:[], sales:[0], ss:[0, 2, 3], close:[], fu:[]}
  },
  roshni1: {
    name:"Roshni_K", initials:"RK", color:"#16a34a",
    cq:89, audits:4, ncf:0, totalErrors:3,
    params:{open:0, prob:1, sales:0, ss:1, close:1, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 1 of 4 chats this month. Example: on a \"Gold Coin\" chat, personalization - taking Cx name atleast 3 times max 4. Focus on this consistently across chats."},
      {cat:"prob", label:"Probing", text:"Probing — flagged in 1 of 4 chats this month. Example: on a \"Product Availability in Store\" chat, one view Probing. Focus on this consistently across chats."},
      {cat:"close", label:"Closing", text:"Closing — flagged in 1 of 4 chats this month."},
    ],
    cases:[
      {query:"Gold Coin", score:75, comment:"AOI — Soft Skills: Personalization - taking Cx name atleast 3 times max 4. Non-conversion reason noted: Jc made no efforts to followup and close the sale."},
      {query:"Wants to know Offers/Discounts", score:100, comment:"Good work!!"},
      {query:"Product Availability in Store", score:85, comment:"AOI — Probing: One view Probing."},
      {query:"Jewellery Selection", score:95, comment:"AOI — Closing needs improvement."},
    ],
    paramCaseMap:{open:[], prob:[2], sales:[], ss:[0], close:[3], fu:[]}
  },
  mrunal2: {
    name:"Mrunal_G", initials:"MG", color:"#0d9488",
    cq:86, audits:4, ncf:0, totalErrors:7,
    params:{open:1, prob:0, sales:2, ss:3, close:1, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 3 of 4 chats this month."},
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 2 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, giving Complete and Correct Solution. Focus on this consistently across chats."},
      {cat:"open", label:"Opening", text:"Opening — flagged in 1 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, acknowledge occasion (Wishing). Focus on this consistently across chats."},
      {cat:"close", label:"Closing", text:"Closing — flagged in 1 of 4 chats this month. Example: on a \"PoP - Redemption\" chat, personalization - taking Cx name atleast 3 times max 4, Tone of the JC (Pitch and pace). Focus on this consistently across chats."},
    ],
    cases:[
      {query:"SKU related query", score:100, comment:"Good work!!"},
      {query:"Jewellery Selection", score:95, comment:"AOI — Soft Skills needs improvement. Non-conversion reason noted: Cx was looking for early delivery ith exchnage."},
      {query:"Jewellery Selection", score:78, comment:"AOI — Opening: Acknowledge occasion (Wishing). AOI — Sales Closure: Giving Complete and Correct Solution. AOI — Soft Skills needs improvement."},
      {query:"PoP - Redemption", score:73, comment:"AOI — Sales Closure: Giving Complete and Correct Solution. AOI — Soft Skills needs improvement. AOI — Closing: Personalization - taking Cx name atleast 3 times max 4, Tone of the JC (Pitch and pace)."},
    ],
    paramCaseMap:{open:[2], prob:[], sales:[2, 3], ss:[1, 2, 3], close:[3], fu:[]}
  },
  sudhanshu3: {
    name:"Sudhanshu_P", initials:"SP", color:"#7c3aed",
    cq:86, audits:4, ncf:0, totalErrors:5,
    params:{open:0, prob:0, sales:3, ss:2, close:0, fu:0},
    aois:[
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 3 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, giving Complete and Correct Solution. Focus on this consistently across chats."},
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 2 of 4 chats this month."},
    ],
    cases:[
      {query:"SKU related query", score:100, comment:"Good work!!"},
      {query:"Jewellery Selection", score:85, comment:"AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. Non-conversion reason noted: Cx wanted to visit the store."},
      {query:"Jewellery Selection", score:80, comment:"AOI — Sales Closure: Giving Complete and Correct Solution. AOI — Soft Skills needs improvement."},
      {query:"Jewellery Selection", score:80, comment:"AOI — Sales Closure: Giving Complete and Correct Solution. AOI — Soft Skills needs improvement."},
    ],
    paramCaseMap:{open:[], prob:[], sales:[1, 2, 3], ss:[2, 3], close:[], fu:[]}
  },
  khushi4: {
    name:"Khushi_SA", initials:"KS", color:"#2563eb",
    cq:86, audits:4, ncf:0, totalErrors:5,
    params:{open:0, prob:0, sales:3, ss:2, close:0, fu:0},
    aois:[
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 3 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. Focus on this consistently across chats."},
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 2 of 4 chats this month."},
    ],
    cases:[
      {query:"Jewellery Selection", score:85, comment:"AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. Non-conversion reason noted: JC made no sales closure effort."},
      {query:"SKU related query", score:85, comment:"AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. Non-conversion reason noted: JC missed on providing relevant service to close the sale."},
      {query:"Jewellery Selection", score:95, comment:"AOI — Soft Skills needs improvement."},
      {query:"Customization - Existing Design", score:80, comment:"AOI — Sales Closure: Jewellery Recommendation/ Offer Alternatives. AOI — Soft Skills needs improvement."},
    ],
    paramCaseMap:{open:[], prob:[], sales:[0, 1, 3], ss:[2, 3], close:[], fu:[]}
  },
  sakshi5: {
    name:"Sakshi_U", initials:"SU", color:"#c8a846",
    cq:86, audits:4, ncf:0, totalErrors:6,
    params:{open:0, prob:1, sales:2, ss:2, close:1, fu:0},
    aois:[
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 2 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. Focus on this consistently across chats."},
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 2 of 4 chats this month."},
      {cat:"prob", label:"Probing", text:"Probing — flagged in 1 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, one view Probing. Focus on this consistently across chats."},
      {cat:"close", label:"Closing", text:"Closing — flagged in 1 of 4 chats this month."},
    ],
    cases:[
      {query:"Jewellery Selection", score:85, comment:"AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. Non-conversion reason noted: JC made no sales closure efforts."},
      {query:"TAH Request", score:100, comment:"Good work!!"},
      {query:"Jewellery Selection", score:63, comment:"AOI — Probing: One view Probing. AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. AOI — Soft Skills needs improvement. AOI — Closing needs improvement."},
      {query:"Jewellery Selection", score:95, comment:"AOI — Soft Skills needs improvement."},
    ],
    paramCaseMap:{open:[], prob:[2], sales:[0, 2], ss:[2, 3], close:[2], fu:[]}
  },
  siddhi6: {
    name:"Siddhi_Dh", initials:"SD", color:"#db2777",
    cq:83, audits:4, ncf:0, totalErrors:5,
    params:{open:0, prob:0, sales:3, ss:2, close:0, fu:0},
    aois:[
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 3 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, jewellery Recommendation/ Offer Alternatives. Focus on this consistently across chats."},
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 2 of 4 chats this month."},
    ],
    cases:[
      {query:"Wants to know Offers/Discounts", score:70, comment:"AOI — Sales Closure: Giving Complete and Correct Solution. Non-conversion reason noted: JC was unaware of the coupons policy for Tata Employees."},
      {query:"Jewellery Selection", score:85, comment:"AOI — Sales Closure: Jewellery Recommendation/ Offer Alternatives. Non-conversion reason noted: Cx was asking for 100% off on making charges."},
      {query:"Jewellery Selection", score:95, comment:"AOI — Soft Skills needs improvement."},
      {query:"Jewellery Selection", score:80, comment:"AOI — Sales Closure: Jewellery Recommendation/ Offer Alternatives. AOI — Soft Skills needs improvement."},
    ],
    paramCaseMap:{open:[], prob:[], sales:[0, 1, 3], ss:[2, 3], close:[], fu:[]}
  },
  prasad7: {
    name:"Prasad_B", initials:"PB", color:"#059669",
    cq:81, audits:4, ncf:0, totalErrors:4,
    params:{open:0, prob:0, sales:2, ss:2, close:0, fu:0},
    aois:[
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 2 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. Focus on this consistently across chats."},
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 2 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, failed to portray empathy when necessary. Focus on this consistently across chats."},
    ],
    cases:[
      {query:"Jewellery Selection", score:100, comment:"Good work!!"},
      {query:"Jewellery Selection", score:45, comment:"AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. AOI — Soft Skills: Failed to portray empathy when necessary. Non-conversion reason noted: Jc missed to take ownership."},
      {query:"Jewellery Selection", score:95, comment:"AOI — Soft Skills needs improvement."},
      {query:"Customization - Existing Design", score:85, comment:"AOI — Sales Closure: Giving Complete and Correct Solution."},
    ],
    paramCaseMap:{open:[], prob:[], sales:[1, 3], ss:[1, 2], close:[], fu:[]}
  },
  joginder8: {
    name:"Joginder_B", initials:"JB", color:"#f59e0b",
    cq:80, audits:4, ncf:0, totalErrors:5,
    params:{open:0, prob:0, sales:4, ss:1, close:0, fu:0},
    aois:[
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 4 of 4 chats this month. Example: on a \"TAH Request\" chat, giving Complete and Correct Solution. Focus on this consistently across chats."},
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 1 of 4 chats this month."},
    ],
    cases:[
      {query:"SKU related query", score:70, comment:"AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant, Giving Complete and Correct Solution. Non-conversion reason noted: NO sales closure efforts."},
      {query:"TAH Request", score:85, comment:"AOI — Sales Closure: Giving Complete and Correct Solution. Non-conversion reason noted: TAH request raised."},
      {query:"Jewellery Selection", score:80, comment:"AOI — Sales Closure: Giving Complete and Correct Solution. AOI — Soft Skills needs improvement."},
      {query:"Customization - New Design", score:85, comment:"AOI — Sales Closure: Jewellery Recommendation/ Offer Alternatives. Non-conversion reason noted: Should have pitched for the alternate."},
    ],
    paramCaseMap:{open:[], prob:[], sales:[0, 1, 2, 3], ss:[2], close:[], fu:[]}
  },
  ashraf9: {
    name:"Ashraf_S", initials:"AS", color:"#0369a1",
    cq:76, audits:4, ncf:0, totalErrors:8,
    params:{open:1, prob:0, sales:2, ss:3, close:1, fu:1},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 3 of 4 chats this month. Example: on a \"SKU related query\" chat, personalization - taking Cx name atleast 3 times max 4, Grammatical errors and language , Failed to portray empathy when necessary. Focus on this consistently across chats."},
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 2 of 4 chats this month. Example: on a \"SKU related query\" chat, attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant, Jewellery Recommendation/ Offer Alternatives, Giving Complete and Correct Solution. Focus on this consistently across chats."},
      {cat:"open", label:"Opening", text:"Opening — flagged in 1 of 4 chats this month. Example: on a \"SKU related query\" chat, self & CaratLane introduction given on Time, Delay in Greeting the customer. Focus on this consistently across chats."},
      {cat:"close", label:"Closing", text:"Closing — flagged in 1 of 4 chats this month. Example: on a \"SKU related query\" chat, customer was not made to repeat. Active listening/ Attention on the Query, Checking for future follow up/preffered time and mode of contact, Did the interaction ended well?, Was CSAT Survey Pitched?, Tagged corretly and Systems are updated. Focus on this consistently across chats."},
    ],
    cases:[
      {query:"SKU related query", score:30, comment:"AOI — Opening: Self & CaratLane introduction given on Time, Delay in Greeting the customer. AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant, Jewellery Recommendation/ Offer Alternatives, Giving Complete and Correct Solution. AOI — Soft Skills: Personalization - taking Cx name atleast 3 times max 4, Grammatical errors and language , Failed to portray empathy when necessary. AOI — Closing: Customer was not made to repeat. Active listening/ Attention on the Query, Checking for future follow up/preffered time and mode of contact, Did the interaction ended well?, Was CSAT Survey Pitched?, Tagged corretly and Systems are updated. AOI — Follow Up: Follow up done as per guidelines & commitment. Non-conversion reason noted: JC made no effort to help the Cx."},
      {query:"SKU related query", score:85, comment:"AOI — Sales Closure: Giving Complete and Correct Solution."},
      {query:"Jewellery Selection", score:95, comment:"AOI — Soft Skills needs improvement."},
      {query:"Jewellery Selection", score:95, comment:"AOI — Soft Skills needs improvement."},
    ],
    paramCaseMap:{open:[0], prob:[], sales:[0, 1], ss:[0, 2, 3], close:[0], fu:[0]}
  },
  mohammedzaid10: {
    name:"Mohammedzaid_S", initials:"MS", color:"#a855f7",
    cq:59, audits:4, ncf:1, totalErrors:8,
    params:{open:1, prob:0, sales:3, ss:3, close:1, fu:0},
    aois:[
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 3 of 4 chats this month. Example: on a \"SKU related query\" chat, jewellery Recommendation/ Offer Alternatives. Focus on this consistently across chats."},
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 3 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, failed to portray empathy when necessary. Focus on this consistently across chats."},
      {cat:"open", label:"Opening", text:"Opening — flagged in 1 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, name confirmation. Focus on this consistently across chats."},
      {cat:"close", label:"Closing", text:"Closing — flagged in 1 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, failed to portray empathy when necessary. Focus on this consistently across chats."},
    ],
    cases:[
      {query:"SKU related query", score:85, comment:"AOI — Sales Closure: Jewellery Recommendation/ Offer Alternatives. Non-conversion reason noted: Jc did not pitch alternate jewlery."},
      {query:"Jewellery Selection", score:58, comment:"AOI — Opening: Name confirmation. AOI — Sales Closure: Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant, Jewellery Recommendation/ Offer Alternatives. AOI — Soft Skills: Failed to portray empathy when necessary. Non-conversion reason noted: Jc made no sales closure effort."},
      {query:"Jewellery Selection", score:0, comment:"NCF — Sales Closure: Giving Complete and Correct Solution. AOI — Soft Skills needs improvement."},
      {query:"Jewellery Selection", score:93, comment:"AOI — Soft Skills needs improvement. AOI — Closing: Failed to portray empathy when necessary."},
    ],
    paramCaseMap:{open:[1], prob:[], sales:[0, 1, 2], ss:[1, 2, 3], close:[3], fu:[]}
  },
  aditya11: {
    name:"Aditya_T", initials:"AT", color:"#ea580c",
    cq:49, audits:4, ncf:1, totalErrors:8,
    params:{open:1, prob:0, sales:3, ss:4, close:0, fu:0},
    aois:[
      {cat:"ss", label:"Soft Skills", text:"Soft Skills — flagged in 4 of 4 chats this month. Example: on a \"SKU related query\" chat, delayed Reponse - max duration for reply is 90 secs, Assurances and acknowledgement (using Positive phrases), Failed to portray empathy when necessary. Focus on this consistently across chats."},
      {cat:"sales", label:"Sales Closure", text:"Sales Closure — flagged in 3 of 4 chats this month. Example: on a \"Jewellery Selection\" chat, jewellery Recommendation/ Offer Alternatives. Focus on this consistently across chats."},
      {cat:"open", label:"Opening", text:"Opening — flagged in 1 of 4 chats this month. Example: on a \"SKU related query\" chat, name confirmation. Focus on this consistently across chats."},
    ],
    cases:[
      {query:"SKU related query", score:0, comment:"NCF — Soft Skills: Delayed Reponse - max duration for reply is 90 secs, Assurances and acknowledgement (using Positive phrases), Failed to portray empathy when necessary. Non-conversion reason noted: JC created multiple delayed responses."},
      {query:"SKU related query", score:35, comment:"AOI — Opening: Name confirmation. AOI — Sales Closure: Giving Complete and Correct Solution. AOI — Soft Skills: Personalization - taking Cx name atleast 3 times max 4. Non-conversion reason noted: JC was not focused on sales closure and gave wrong solution."},
      {query:"Jewellery Selection", score:80, comment:"AOI — Sales Closure: Jewellery Recommendation/ Offer Alternatives. AOI — Soft Skills needs improvement."},
      {query:"Jewellery Selection", score:80, comment:"AOI — Sales Closure: Jewellery Recommendation/ Offer Alternatives. AOI — Soft Skills needs improvement."},
    ],
    paramCaseMap:{open:[1], prob:[], sales:[1, 2, 3], ss:[0, 1, 2, 3], close:[], fu:[]}
  }
};

const PARAM_LABELS = {open:"Opening", prob:"Probing", sales:"Sales Closure", ss:"Soft Skills", close:"Closing", fu:"Follow Up"};
const PARAM_COLORS = {open:"#0891b2", prob:"#2563eb", sales:"#dc2626", ss:"#ea580c", close:"#7c3aed", fu:"#16a34a"};