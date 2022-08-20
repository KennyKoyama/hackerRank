/*
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

let arr1 = ['abcdde', 'baccd', 'eeabg']; // 2
let arr2 = ['xhsbaqwbokcaqbkhrzddydwirmldcr',
            'kwkbkhlwmlpuomfaenahhnnpgqpkcxlspbomrweoqq',
            'rtdckeukfoppbsiccflxqcoxrhwnxpwyjsrvjngqmbgqfwahhkzcbifrvpamffoxcetdochazcqsqhazndwdk',
            'cakdnrducighyuuemxhqmujauwxabextkdamxybkoyexmdmlyvnmlrwwrt',
            'czuzxlzrmuaa',
            'gquymxuabmymtnljadbqxjsipnixbyhwhaoaciinwdhppbpyxswcveddpojlopqsuqsvjhpobpdefuj',
            'abtwcqoib',
            'vqpgcuwvxdlaquaiwydejgpwvpwdjeybgbtienzijzeah',
            'shrcvpgwzdkfcvpmjeuslonwerklxysafwgeurdnshmzunpaxmgfiwsehowfyjboeahpuqlatcmooenlicnrkhcbkl',
            'jcvcatdtubemfmjqfplxgwkqeuyderpznnqhvvpjafnceutugnixltiyrmnptcxpvqadnpowacsuoucwmfgbkzs',
            'ufaqewahvnqsbpqw',
            'jzecprvdbgyxmhslqdxjsqnmdoavvifebqrtklohndgvkemackgmgtpkhqetqybxnpiyvlebovhbwivctrruc',
            'wrhighznjjppsvmsxmtwtnphaxqmyjwtxrrfqxrurbengtrvgmeaxfodwtfucmdeasgzuxkghhjexblancvzd',
            'hluadkczkazvptpjwwempwfpacbnfmhrzghznjln',
            'znizntdoqtqabqvykqvnglbgkmclrzajsqwxnshlzalzfbalkxoxpsmtoon',
            'paws',
            'nwtsbxdtyqlapasbazttbsguceyqjvebxdjnfdw',
            'kxafenseotsysgeswrtpzibyamlhbjknlcoveihukdebfbwsaqmzvdlaytfilpcqkspdwnysdfjvwdtlsqactcrelzzhxqxzv',
            'yqaaayknxwnbmzkictawsgxeq',
            'aaqkpvmiiho',
            'ybnnrikqjybxrawihgyxiegxcimriyqrrgcxsfeidnhwfxjnpzxhloav',
            'pjpdtrolhxvfrftvuweatcisajvqkaqqmblwugegmbpteukwxvoebpemcjquuvlrqkczeabuhmss',
            'epgmbfpdjktvkbiczmumnoirupbasdvxpjhsocxaewcxkquxjolcqwjwnqtnirgsi',
            'hjvkyhlyuqrsoonfqlyxlenoszrlquqsyjwrufuretagpuq',
            'oaqdya',
            'ikqnbkmmaoxqjmrmxupfaycfwxwzeldjynafrjdkulsvqweciuyukxnmzriseziuqxoxif',
            'jgabqaqhwashxvki',
            'xrryvkqfkossukeieayukmycfusyrikiotoiutvykatijjjzrioys',
            'uaepqfgaevkewfmyhdmfeifsheilwfusmlnrpjtaeathypaql',
            'pkzqkqvlgadoatqdwhgwkehalzrfawkxlivimioralfsnwqyhampnhqhdgssoo',
            'lyqmibiheakvntaijqiwviwadksmxewhzejpkhdlbisqxmaqcmxctkfvqo',
            'zgylpetfogykwgypzyoxjcuglfcawxubtqnteyvajnafzznmojnhovohsaowhuqpwhlydmtzwvrirjknynsiijivpqguabg',
            'eftqjvctdzhxqbupfkwppcsrujgrziuelxozbzzcrcfbghqzdftctzfxgvmevyvbdbfigsykevjanvlaoepmqedufn',
            'aotiefuigarhpgsghcptscko',
            'pfrqhzapxgeltxikswnocynfguafqsigbpwehbfywndxbxaupzbdggshjocvowitjvunospmtzudcpl',
            'yqzudnoqenlskxakuummlvkefmljvteacihzapaabuvjyjgodptyavvupptmvypvhnta',
            'solabz',
            'vxlaetxbklmxztfkozbzlolqr',
            'wvcga',
            'wahauykchejjiyikfwxzsbufdegpovkrbpampyuuhsaqzcnybbjzajjjrbszvbvdpyhbccwsjmnoztlejpffnzfytrdppsjrpvxx',
            'cxkhanwweqhcjttjorgjocdfknajxbtbsucabin',
            'oya',
            'bznssnvxqvhhsqtmvluzmafqhftmorixkanbsixebrjqucgatepukzivhyhwxzfhgqztqtizkftvthyqjec',
            'bbrjqukyipcnrhirhvcsmzgftpxtvehmfiizhorionzyhqdxodpaazjducjoqowtwzspfs',
            'cnznakegiobpzqlzgyicllqwgrscxedu',
            'hmofrxma',
            'adh',
            'oxa',
            'bglhbygsyapztwrxjedcvpctvilcazozpralyodujolkixitrxwimazwnxmglwvkem',
            'rgiyigzujasnsovsjjaqizcomxakticqyqdpdughlyuazpnfbmcgnveiemsybfdg',
            'rioajgayihhagpcrj',
            'zqgipdddjqxctpdzqiwzxwvxnwoxstodzcwgergfiiaizebhktlvrizzkomimalfbsxkduavkjxaoairfh',
            'kgjdzysfkxmetkaoylyskcqlqtfzyayyyudxsknzxrcyujmwbnbkbtsfgitrrawfxzjthyfmgckgjqespdifqtpxjbgnvr',
            'hiagaaeynarcvstegt',
            'yadxdlavbxptwglaiayoowuogvvtgcfywluubqtkzrrhfxlovgef',
            'hlypqfdiqlfnkllzouulioezroipxqdlsxwanwykvbcldhoetaeztgrootpjojcceuacwtzqagqamcvgfdednqczyvbtdx',
            'zisguwmsaxhxuwjmhyfzuwiipggmwdouo',
            'lbwzvwermrlvcmklemjkfrbljlnxrtizbyeikrgwjjptnzumttueabagmxizruareaeykxpblhrxcdyncqvpvcunwnfxzmpgys',
            'prttjtiytlyyrultdkkpltjieolromizxwjfesyslnlxawtuxfiykdjobvoaeehfvxanlqzpkznggwkteeevlvsshvptayxvmttl',
            'qgkpbaajagtvqiyiaodlrsikonhfwakpjdcbtalsxcjvbedvcempmvoeenrignubtaslxftwagdiobnevqzvqva',
            'faedrfxkahlcgoilakrcyivijzutjlrdumyufckvt',
            'vau',
            'hbvbxfjzegevcqgaphablnsmlbsoeqmaioprbvtddsupvnqngwmxcpflvuafxpvd',
            'brtfnusycjisbcphougpjdvauguelqkzipcuijeoy',
            'ichepvyzntaev',
            'zenwbsywgmpiutpzcjlaatkzmgobpxbcxmuxarykyoeqdx',
            'lfluwbfavxkugqlwyxasngjzsdsyjpgeydajtolqsx',
            'bhczkeeqzhzbartmeqpaqruysxjzaauoiqktopalvmdktikkldlrjllmcdpoygeiyukptponoihbsrrfvjfhoce',
            'zap',
            'ruiospjscgsufpnqkxkyykawjzwkczikahsyzauktafln',
            'lreuxplanxvcqitroicfi',
            'ohfaufeligmwtcsawktgxwtplivubrwmcjbqwgkcoxjyjwheidyqthgkoakhewhnwkvcatqpbwsqfkiqabjjonykglqwbswfyt',
            'vocqooogtaicbhuaiupuipleufvdccabmfywoykochscytztchknyorlocfdntwwovefaq',
            'xdmyaggpho',
            'nscoqroxhdadpeuycosccvsnmtuugabmctqjeirzc',
            'jhhlrbgojnrllgdewjvleyqdbfqvnjykfdjlxswwqeacczilgonlysaeqjghqpmwulkpupahsbbwihayahdfljjfgedri',
            'mnfhtdoelgcismveynwpedfgqiosyjadntdewxlufoqorroevrcv',
            'tzcetubjznmepihqloxfevhnyxhoytayxpkjvsgtmpkcimescblehhpgtbrngbwaufvjoqprgipwbahzkhjxfjxruqegcjgwgn',
            'pvcuauizaozvhsbtwgxihosfgjazpahwkai',
            'zsgkakcjezqvrqokvtgvecfgykwmvdpnapvjsuglckolshfiawxkogumzwiverjxpoyyuyhmopglvvfyuwa',
            'rfywidpltzdddyrhorkbfanakjjbfyhs',
            'liwgcigsdsyglkbefvbraoaexrprytclpvbwwpppouxbcmhpzswfkuhbkbzhymrceewbsdjsugwznmouri',
            'epaotrdpredwowbjpafkswggzhhzigjcrkvlpbqgucvaprkskwilfmgzyqiijibzvteiujzjqeankernianranftzkoafyzrj',
            'ntvvsjszkygncqfabnbajpmibfykwgyfaloozaoohtvnxclgsxjnlyvhvg',
            'bpsbesgxuufgaxsmcyhbfgfmzcyaxwizbmoyecacp',
            'mjootlmwwumapdrjmbhayptf',
            'kbrna',
            'xgooaibxlpjfotxwfgjtomwpjhmvjliubjavgjizaudpta',
            'cclrtzxwjsybpazszlbhwewuqbathpvrstemsdfqxblzlgblgkdrvpwitgqykmduvyapqw',
            'jsnpkdnmgpxgayihlblrxdpwqrctzvzoaylituwbiojtfuhfkpaggsbmqjaddmfjhaqpscyxpznwhlbxnp',
            'afclnupiwlgqchkdahacm',
            'ghibvbwuorvaubjkwphqghpzzqhgqhagzgsrtoouxefpckwvcndwlxjnpzzliqeeduqlezlayvdvzfstzpyomdyx',
            'cabazene',
            'iccteslmzahdvafdufaiactlgghsqqsayzalvyvfznwwiwgdshqrzgukgdqswm',
            'va',
            'evcmyciioxyggjpyeojrptzrfijszfargbtqjwyyseijzehgzlwhrresgbnpmzmasx',
            'gadtslngjkipbhdzfeypofxqdycmornqzwjucxsslvjhrmewcljekmeqtjaimjmxasyfbpjhkvgugmwkjyylygswjehflhwxv',
            'dpcazx',
            'mqakmgqxwqmj',
            'ombmwzjgntuvvhulglygpoqswngfedmdlywxqwjrpcyokultptfzmxpbflshggoycfaanaezburiqsphbzeqzbhkfykaemgsgu'];

            let arr3 = ['wlqdbbmrbbca',
            'fndlpcyisdcosxjrglsyracbbqaebwdmbkdofeexoqphwfgacdlnxkmprxrljpdy',
            'dzxxhqjophycwuccrwrhbekczqrqiifjbcqkxszhtqvabfncsalkvffcbaxsapnpmohk',
            'tootcndrwusguhbdbxkluagaxeobzyeddacdwngrwmbchqplu',
            'jihcqygidhsfoyvabxajuvlphluzomo',
            'zcvocajjpaxauohhdfcblwwizdnpygqlwrblbppnqmooadxtedgkudru',
            'tsoicexkzfinpcbnsdovrtkelctbeitbgldqqpfxuxtfpybzusdjpjzgisbybevhhfpkrqeddbsqchae',
            'eznasnpflcumubjwdalxzwutdfrwpyhkncvbpsvbnylugixnpgvk',
            'cabhhevseayd',
            'khrsufraowtxgonxgdrffrpvdbdeeqagpurkkseywfaqypnjidjsrumgoviprjcbcxuicbzixvlbtdqnfb',
            'pwkxxwbwtjaknqbfsxkowtozovcjguvynwnbvwewcgosuicbfnemhluxjvgmpddchjonjm',
            'tpevrcojclbgydcikeaaqmvmyrbtiivlubdgbgvwsfqhihemnykkmsebvtxulxdbkhqrdogvtcenhviqrr',
            'azngfwglcvbmfrhrawhpysdqjmuggivpguxqacmjnhxxzuftnjendthrdwwexvtbpkrttomssdcebzmaxxre',
            'gazwzratddbac',
            'pjakhbucnzdldhchel',
            'bzcdesupznpmaebdomtgqxkfxomqmva',
            'drbcqbaoaing',
            'oallngsofuoqopfthnngehfosscymerssookvbjjgxeqccatdmnvwalwibauyhtswkjsppsmwdmiquqqd',
            'fwjhsqtwoliyvbdsdbefdaesvknactlpz',
            'lsqxzjkytgmdfiwbqlaswmxbhqibqqyfveczxcqcvjenctpcdsysdrkispsarxonifoggd',
            'cgjhbyibpghbnqraaqimsefnkxvvnnnvrbotbneigymolqghyxaprmmxfcwmqxxakydoorjicvxijutcbmyrqqzxisdqqeqaaa',
            'tseejabzccxmphwvecvqsorfdhpvkuuqxgeqtbvdajdubblmvfjmubpktvflu',
            'ododeqifxgsxrhtbualcbjgjubimbizxuopccbobkqskvtovpujnwjsaxbnqcmiqrntaudkfwspjmmpcekwu',
            'yhlhuoscxdyslxinfyyrwjaexefyqtzzotxydhxrjaojnqzaznjqqldydmsybeggadvuvphdygluedsljedk',
            'qtmjsdceqdtdlpoyctszkifabagypkonttbxosbquoopru',
            'kduacfioftizbryvrikrysxmojkiukqtyiocj',
            'dhjaaxsagfabdffuvfwffiaelhwuxdvciqubmpfewuchvrbyukkjathabpiaqf',
            'gioaqqhlzwgpaznqdbqnqwkodrlmdmivfqkoanscdhawmwk',
            'wmraodcomumbhrwble',
            'bkiqpcetolvpckpemxhymmfcdcsjbiixidcdindtakxajzhql',
            'bbcajgcctdxdw',
            'yrxoabvaosvalwggofhdnonsvqztnapicpypf',
            'tlneqntaagjkcdlhvomdwiirbgsmhxdjvtduhbntnmqqbqqtulwgxnyzyiatasmydn',
            'mkfbvhtdugdzcztgvedbebgdfnzzpxefcycvevvucibhccazvdoaxuzfertfbrn',
            'dcymhktqxamjotsexnidodqdeqbpygzbhwvermncjcopcgayqrw',
            'nzfcbhfstkvldbapdnpimqc',
            'ofaavkxwjacogcrdfwcmopswvpmjaphsuzhglkyqdobeouagunexnbtwpyccggjiixmwacjtzcbcxgeqbbiftqimcqci',
            'svavfhwzvcgemhibkmhhamvczdwtnvzcqddxmkugvpqy',
            'trxbzxqazollbxmfketdzvloclw',
            'jzbyxloucwcwdgcjsawafpyebrsfcxygpwczmtbkxejzfdtzhujjqvmizjskhuvdwparvjkazbhpandhsrjbbb',
            'vnaccyqjdbybjatosxejkjncohtniwjjdjqktackfroiactzbfrtmewywphcdiwq',
            'bpnvaxvcivtihhhefd',
            'zccbjehjumbdyczsafzlluqgtxmbzvvitranqgiknxmoszhqorkskutftqqysh',
            'rxxmozqhwuhbicfhpvczcsgknddrbfspbequqnhzfjmdacbaihdyrohyovwnotjiiropztgqfxis',
            'bzapvmrhixzgzlfdnosohwmbmllmrutgqyddinejxihnmatqhcaczjklgtocnxfkllhstcxsravgebdiccd',
            'hrcxznkceivmxbdrgbfwthnbpnkcfihrabosjzssfiadojyynshqdvhbvabvffmtwvmgecjdzonqgtnusspxccq',
            'pcjxvcxyhqpbqngyhjgeprprgdooiiaipzrorffxaaihqidyshtowxojygtoenaifh',
            'nnjbfbgcmuhftagjqpjgqbbcdbdiparirvhkmpylviaf',
            'bdtyuydirsmgkfxjwngqkysjjdrutcgbyqsgefsccxdtmkbgatycoieztaktqpzkxysfbn',
            'acizgadzqebandvgeldgzrfgpxxzttbktxwkvdyrcwoicanahosxiwthabojcatmhayvcevz',
            'xdaiwbqoikhyccdufjjjjitjiwwwywchqfzunqjbadddejbcriznxdhaaxtzsjcaquhpl',
            'omucudabkddunbcbubzhcnhbjgapbnebkwbqhgmyduxgonabopsecdcafqrdsayeoredfglcfblayusgeepp',
            'ybxrrcwvdqba',
            'ejyyvcrzcimznadxwrasbhagzlnjwtexkabnu',
            'jzcykuxbmamradenpajyvjxfjvipodpqmyi',
            'wyburlppmrnyixewitaqesvdftovwfvopxaiwxdatukjxbimecsqdtcxtilzfqqgomt',
            'zpkpdebbvnirypwjlchhwpyhpadmblounzusawtiixamaydaqcrvtkbxhoxexbafrzkurgvae',
            'qvrqbcdjnfdgdgvjnccabtgvlxa',
            'lzwzwklnpahxwezchfvurznjylmjgobvmbelapgdyacxpbcmxbofaakihkbcdkwwb',
            'ddlavbrdkklaypc',
            'dekyvdtcmsixuuyujmhactampubvz',
            'cqzcqgarcpoapulcljenodvtvlsfipmfzdvbiqvnxxbvduhub',
            'phjozbkkmhlxqimbclzjtqhjixnngicclvtfasorpguwbheuceembwyifssmuvesjgicziypwuzmgyksutpqobxddgwcr',
            'lzfedysysuibdzjyxfamicgdtfsgxglqubaqspwsocljjaekcafqvlgtnlkbx',
            'kjeklqrbkcjbsjmocfrmnrmpyhyqzpqeolhzaxdhfhszyldktadpkreubveuavrmolcctupzeiibha',
            'uidbqczzqfwspncrqjhpngaouinykucunkaprswfxzkaljkslrwqizqykstkxaacyzc',
            'ywjwbbwamomnnwctecvodirukyibufghijcgiegktxapfoaatqbjywhqajrsvcwbyuhntrlkd',
            'lpxdftislbfrtxbuoyfyeelxcxforisknoxwyotrxkbcaxmaytbohrodsckhssomuhdhtsqdea',
            'aippypcqtvscomvdafcb',
            'wcbrwatddd',
            'hpdcdcqcjbyggbubomogsesiauxopdcmmcvqutimxcbraymsnchezdzmuctorcuswynpdh',
            'qcafeedflhyawnahuszb',
            'kdimimomokymjhxjvudagjalxytjzcylcbxoybqywhlvjkxkgyfpqrfwwgqbgdcnhmcxxkhmckhvcekpcwaggktrspryaucfiy',
            'tbaqqdmhdknqxwyyvatrycayfjkjb',
            'ichmdasijhpbpbuo',
            'ikgcjftofkfmgehpxpmbvwvurejebajgdtqwoerurztiqdusibgtallagziophyecgburqztocdphhjkzfg',
            'opqdatbovwtigueygizeqaudfpisgsbddlzuxkbvpizadirgcghja',
            'oeuwvlgdivdmtedvouiwhromvcvawbfreqkypvngbztnjljwubshudqbxqzxcwvvdymupuuydwaabsufzccjmatnp',
            'ibksgubbbtyeddewdurzlpczocvgwlomarjahlktxyfwunft',
            'scjmatbgasqrkskdcoc',
            'pbptqjdigqxrgfeeifudazmjagpqfpkigehycevigskeqfeophcadwahpasejooytjnnzgrebmkwyjhomhokbghsurbnbcix',
            'nvqtgvbdjvnkhchxbtsqcygnnatyaxtkyolmzvrxjrmcfworpeazmifcmjbom',
            'zeactmjqxcftxxpxbzsatetbqxabwsbrsdfzgk',
            'jzokqdgtmiknlupiaitmdxyzjgteurrpwqmzjnmpyvhrlkvrvohywsjzbobdunkfhpszyfzhvbmtahwyeyssmxilwliadcbcohf',
            'qbmdzqlvhwvpwuepcsalqlstsysgqbzrjwqztadfxhtcrudmtdgyjkhwwiwlxabbevplbprkcy',
            'obwpxlkplacnwnsbqbifgbjtpdjdvsymtmgapjyxmzgrlnhjlafqczfsgdpadipycrziahuhh',
            'pcfoigiluxobfgdlhemqcncaawlhvcauucm',
            'suhjsgbclvdvzpelducrhpzqkpbhmowkhhxzzealabinwtzqizeyoyyuqdugxtzxgdbf',
            'shyezfcfdqayb',
            'uvwjsmnyskxzcsuwwwiaheemzedvwkbfmedsclcflqginqcgawykbaahsgcgkqfhwyqtdacdr',
            'fbselosapztxrocwmvdzgbhpebwebpomerzccgvr',
            'lxnoynimecbmdovnyauapznjtbyapkjwdexqimvdoqfjzgdlswzumrvyveimtbzpze',
            'fcydvajeeehvhwrbckiixpnnxwpxehmclojcdpyyoukjxmxykahcpnbenewajqoxpahwhmyyqwovpusk',
            'baastodbtupzsqgefufkgnzsozyfgogynchiwxulvqnadkltpwkrqasmuwmhefdzmtobjexyhgbqzhdlxygmlcubczjgwayjv',
            'ubnixmgdixzyvsdscejnnqrngqcynvzkoatgldnwtbqyqzearbpyfls',
            'gmphijuoyzenednrblzjdftchkygcmujasetaqczmobuwlnbdyrpcvvxvqoc',
            'kuujodranurqhexxrgcnjtgdgakqxkqvausdgbqx',
            'dukpfcaibe',
            'rguziolcjrbaicmodpzxhbdmdtpcmfrtgauhnbcggnazeqds',
            'jrkzfbzunysltcdlzpbhawvodtataapvoietwq'];

function gemstones(arr) {
    // Write your code here
    arr.sort((a,b) => a.length - b.length)
    let result = 0;
    let current = new Set(arr[0].split(''));
    let check;
    let size = arr.length;
    console.log(current)
    // console.log(arr.sort((a,b) => a.length - b.length))
    for(const letter of current){
        for(let i = 1; i < size; i++){
            check = arr[i];
            // console.log(letter)
            // console.log(check)
            if(!check.includes(letter)){
                console.log('false')
                break
            }
            if(i === (size - 1) && check.includes(letter)) result++;
        }
    }
    console.log(result)
    return result
}
// console.log(gemstones(arr1))
// console.log(gemstones(arr2))
console.log(gemstones(arr3))


