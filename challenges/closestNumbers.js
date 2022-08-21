/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854];

let arr2 = [-1638945, 305230, 8993653, 5556831, -3855040, -1842688, -2278728, -4303825, -4012011, -5688059,
    -3832893, -6364310, 2172390, 1745561, -1187991, 3675049, 5803185, -5345865, 2603799, 5347344,
    -4345186, -2130270, 1399187, 1523534, -5871493, -8405180, 7566350, 2203304, -6231380, -4845435,
    -3551106, 5097393, 5461, 2416260, 7366270, 8319082, -8480776, -5346411, 8813467, 6961324, 3848989,
    -1360343, -2969761, 6794275, -4898519, -9185888, 6170806, -6085329, 9398618, -2573870, -345489,
    387168, 8146611, 8885692, 395793, 2115970, 3729366, 2813499, 5926800, 1870049, -9939814, -1972596,
    4163110, 4827814, -1768110, -6017583, 5978551, 1201324, 5607779, -511218, 3793626, -4095100,
    -1648622, -5976165, -2332555, -9305762, -1831548, -8387868, -2797534, -2011476, 6297115, -8525140,
    -5592983, -1621457, -3889612, 8198422, -6011221, -3326882, -6894028, -52949, 8309682, 9963193,
    -1686181, -5611025, 7283427, -6162654, 8468254, 8949062, -2990598, 6066968, -6980019, -5575307,
    -9657361, -7235635, -6401496, -2656071, 8334972, -1678721, -8335850, 1944157, 2809234, 6755584,
    -4579571, -3392782, -6454396, 8267577, 9809995, -2581390, -2743222, -9988728, -4419506, 2340017,
    3248776, 1726593, -58483, -4111692, -8297946, 3736702, 8318994, 1249971, 6964199, 9080222, -5621819,
    -6581722, 1651835, 1539718, -1906194, 8877519, 4101277, -2230992, 8804482, 7299410, 4596814, -9241901,
    8146295, -7580442, 2900029, 7717562, 1716237, -7631574, 4447169, 8095552, 6162121, 583380, -2341303,
    -7973158, -310100, -2277573, 119559, 9066542, 4152072, 276389, -481758, -1396422, -4954938, 7570883,
    6301543, -8537031, 7038362, -8597544, 9343746, -8582484, -3094363, -7928985, 4046065, -3896320,
    710398, -9515430, 6184626, -7492081, 1180924, -8708746, -2656617, 8821875, -6337170, 6485229,
    853735, -8426847, 9090655, -6262943, -7907968, 9923423, 7851215, 8686697, 717136, -7086592, -8332715,
    5340263, 5290212, -8051279, -1977151, 8602160, -2866679, -7474624, -2634615, 6640793, -8148680,
    -2013900, 4709019, -1725835, -517864, 2417311, -5807083, -5761643, -4610, -5283697, 3082136, -3819759,
    6825773, -1885252, 2369161, -5260099, -8156131, -5963566, -4023394, 8748791, -3905621, -2930867,
    -1225158, 7431194, 2349786, -6116096, 4450778, -358662, 2135528, -1240649, 5309559, 8206004, 6318872,
    -2603756, -7519656, 1509719, -5463690, -5027197, -275389, -7950819, 4719871, 6235047, -7316589,
    4442953, -6116600, 5011732, -9194794, 7683060, -2665046, 1284882, 1541093, -4113455, -5519840,
    8311763, 5171857, -6090495, 838530, 6961450, -2044164, -6227143, -9188975, -1017123, 4256354,
    -4080360, -4590, 8020573, 5538686, 4810423, 1245122, 8162288, -5045772, 2536015, 5256713, -9810186,
    -3079542, -879323, 9194050, -8374643, -633344, -5296772, -8331741, 1010508, -8915709, -5427406,
    -1001519, -1556578, 7193615, -1851037, -6036938, -411268, -9380842, 6364948, 7460964, -7380863,
    -4449067, -3146787, -1907966, 8322217, 5063398, 7816569, 8839334, -7855418, -7789329, -5557268,
    -7995114, -1227327, 3075510, 828904, 1742829, -483022, 8826047, 1819409, -1361887, -3379033, 9765134,
    -9991397, -7066304, -4185606, -5808016, -8603398, -4197418, -4862908, 4528014, -7233990, -5331924,
    7171260, 6286958, -7322288, -3542242, -9018600, 6241917, 2495310, -4405361, -4497612, 9104634,
    -449996, 9570080, 6919287, -7490229, 8474728, -1296722, 7345877, 4481007, -7998365, 6520018,
    3799950, -7586668, -3886286, 5461265, -6979640, -2050500, -4155280, -342650, 6551054, -6885103,
    6155101, -7571918, -6991613, -2612195, -2597446, -2951746, -5579382, 843078, -8350294, 7991882,
    -5430562, -337257, -4088059, -8525068, 8432997, -1825419, -2572567, 2536858, 3395520, -6675955,
    -2081312, -2493991, -8005866, 4867558, 2012333, -9373399, -1913970, -7926767, 8505045, 9494521,
    598040, -5769525, -541978, 5858181, -6593670, -1515058, 9272303, 6594136, 4566038, 1359820, 7793352,
    -1754121, -4145396, -8980383, 332264, -8869153, 3412824, -8933853, -264132, 6134066, -5289012,
    6244025, 4156206, -9023098, -7568251, 396954, -4692111, -5936781, 3306297, -2194280, -5283785,
    -4308461, 9125832, -3586866, 9936673, 1007792, -1552375, -4222319, -2756459, -5785107, 9597711,
    -1895204, -2932844, -3592944, -8722460, 3874876, -6135223, 4661026, -4870055, 1294366, -6439855,
    -4085973, 238903, 7478956, -8713841, 5365375, -9003142, 119289, 7718611, -3849054, -5841779,
    -1518589, 7156659, 3352953, 8400067, -8499792, 5363437, -5378280, -8115820, 8380263, -9508892,
    -4440734, 3884011, -6904698, 8926908, -7891858, -6729737, -46462, 6581123, 5072363, 5562924,
    6909507, 5636929, -1390098, -3650573, -9847047, -1291551, 4219721, 7527208, -9405153, -1064060,
    -1248552, 6962053, -498686, -798645, 2067299, 3275562, -7199184, -6721268, 4383799, 75276, -1239646,
    -8284796, -3550449, 2961319, -1144064, -8536754, -1656101, -5069662, 1514827, 1610032, 8129686,
    9436620, 6835742, -9389116, 3552068, 6204885, -8732399, -831767, -7235950, 6653103, -5409827,
    -6790197, 5139599, 8270637, 7014588, -7691364, -9016710, 3579892, 5545108, 2811004, 299403,
    4847394, -6749014, 2067341, -1991546, 5978986, 9374613, 60957, -2891979, 9082040, 5297289, 2829631,
    2809748, 8303523, 8588906, 1443803, -6156542, 8999886, 3152446, 5258020, 654140, -3629211, -8187173,
    6221607, 8234646, -7637746, -8214159, 6833067, 5701235, 1484440, -9096556, 5065329, 996998, -6377205,
    2129724, 3682876, -9982967, -1796066, -4926427, 3763476, -7185836, -4293756, 174733, -337398, 4367025,
    -8726406, -3494673, 5516832, 4027903, -6377812, 5621584, 6187412, 9783008, -8483707, -2639876, -8804606,
    1431043, 1920564, -2897786, 8250798, -8136814, 1551784, 8405429, 8266124, 8522492, 8574976, 2646381,
    -4527263, 8345230, 3721300, -6302483, 6387176, 4005642, -4477048, -7088757, 3813499, -73477, -3612207,
    3937533, 6012496, -6555558, 848127, -569355, -308014, 2985769, -4694847, 8702477, -3841832, -5050928,
    8971631, -8393887, 1772180, 300056, 1875089, -2268416, 4740029, 510308, 1579442, 19474, 9414663,
    -9096595, -8165011, -7953212, 7200197, 9608201, -5552621, -3729854, -8356450, -2152815, 6626347,
    -6157288, 2264062, 2699272, -229598, 1498701, -6581755, -3239814, 1136117, -6455392, -9717661, 669420,
    -6682606, 4858406, -3200398, 5537848, -5076315, -8841222, -171928, 7711973, 9578137, 6520685, -5199630,
    8991270, -2534617, -9701598, 7664721, -1820148, 6787871, 9829795, 3897197, -8407288, -3439365, -1529619,
    8428295, -2760813, -6598559, 5757866, -1382684, 6481540, 2773022, -5222104, 6053801, 3428628, 1392889,
    -8957748, 8908463, -5857133, 8416196, 26087, -2600335, 1180368, -1651857, 1259152, -592803, 4548207,
    -6531417, 8311276, -3319832, 3005432, 9141678, -3660484, -6706126, 4804192, -6213925, 8810475,
    -8955638, 5235925, -9416825, -8113863, 9672067, 6648907, 4219685, 7900357, 7020273, 7936864, 5570564,
    8829075, -772189, 6147063, -7487001, 7165751, -5327774, -7658330, -8557653, 4180416, -5695317, -9652649,
    6554736, -7943667, -6129577, -9135371, 4032195, 1368043, -4926001, 2228479, -8090441, -4303306, -186062,
    6364803, -610909, -4629774, -2675082, 5572340, -6235170, -1439766, -7155605, -9651376, -4599931, 534273,
    7242536, 5204641, -7642032, -9971674, -6526972, 442245, -6158658, -6323476, -4731238, -3260953, -9394733,
    -6010504, 3272490, 7489622, 6354389, -4915987, -717373, 8929818, 7576422, 3759081, -738606, -7021549,
    -8825114, -8912367, 4656321, 9661919, 9331969, -4229085, -1145686, 2862321, -5572614, -2250769, -291010,
    -9851031, -4041385, 263753, -1031636, 9437927, -2209835, -2396908, 230550, -8833467, -9418542, -3710762,
    2992216, -546929, 8799030, -9965594, 2255542, 737187, 647549, 719308, -6616323, 1027787, -2480387,
    -9343106, 9820414, 2817722, -5087121, 1135462, -4184414, 4624164, -4734117, -7032854, -3508352, -850361,
    3060497, 1137430, 8840471, 9875604, 521448, 7842710, -6922053, -1758940, -1687169, 491086, 4507966,
    -5980131, 9337225, -6977627, -7002496, -670888, 9762572, -3625214, -6963675, -6462236, 2395209,
    -2429143, -1517290, -6345311, 2452325, 9360897, 2915183, 7888263, 6994067, 8198283, -7247242, -7626463,
    -6201722, 5358012, -3356431, -1846972, 107541, -6743949, -9747006, -9006636, -7582492, -2612664, 273553,
    8049912, 9191867, -7890954, 5571833, 7422585, 1440176, 5881743, -4477126, -2138623, -5101571, 9245316,
    104174, 2056081, 1823225, 5568286, -8271406, -7643451, -5353997, 6603406, -3567709, -9191215, 3513450,
    -736038, 3824397, -9646483, -8079526, 9837549, -2675063, 2061889, -2590872, 9130736, -8681323, -7406727,
    8302680, 8028785, 6981169, -4255315, -8916451, -6734283, 1505402, -914825, 2806864, -5855104, 5267280,
    -4754642, -9350594, -336225, 9936415, 2284607, 5344856, 2732986, 3257971, 8377641, 9889932, 9170143,
    9302116, -8704134, 7696257, -4321073, -8990010, -2140762, 6082104, -4857187, -5179821, 4508778, -7429557,
    2218558, 6024387, -8898369, -877554, -1591471, -765787, -2809593, 3489224, -5825167, 6510161, 3573471,
    -7547722, -1839603, -6686791, 4876848, -8409050, 2404145, 3204971, -393899, 4915731, -8044102, 259374,
    1550027, 9092942, -4405742, 6775829, 6563015, -4437637, 3716152, -1221748, -4611936, 8706183, 7401184,
    6111324, 3647037, -3641267, -2186796, -3644406, -1255007, 6325384, 4536272, 2260215, 6986546, -5938946,
    -3246675, 8869170, 6231729, 9914587, -3744382, -5878880, -7802635, 8277825, -5392616, 6366709, -4897499,
    -8662600, 5703079, 2976801, -4293246, 2542211, 4758324, 8148162, -8775013, 4528665, 4059880, -7206390,
    3708074, 197233, -573951, -8043224, 9795945, 5521165, -7491388, 7768328, 9968144, 909485, -5914751,
    -5079024, 4679513, -2426448, -9569419, 3972041, -749013, -9820693];

function closestNumbers(arr) {
    // Write your code here
    let result = [];
    //arr.sort((a,b) => b - a)
    let calc;
    let sub = [];
    let min = 10000000;;
    // console.log(arr)
    const size = arr.length;
    for(let i = 0; i < size; i++){
        for(let j = i + 1; j < size; j++){
            calc = Math.abs(arr[i] - arr[j]);
            if(calc <= min){
            sub.push([calc, arr[i], arr[j]])
            min = calc;
            }
        }
    }
    sub.sort((a,b) => a[0] - b[0])
    sub.forEach((element)=>{ 
        // console.log(element[0],sub[0][0])
        if (element[0] === sub[0][0]) result.push(element[1],element[2]);
    });
    console.log(sub)
    console.log(result.sort((a,b) => a - b))
    return result
}

// console.log(closestNumbers(arr1))
console.log(closestNumbers(arr2))