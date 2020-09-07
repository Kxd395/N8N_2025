export const tools = {
	processors: [
		{
			'k':'check-creditcard-checksum',
			'd':'Check Card Number Has Valid Format',
			'ed':'Check if credit card number checksum is valid (Visa, Mastercard, Diners Club, Carte Blanche, American Express, Discover, JCB, enRoute, Solo, Switch, Maestro, LaserCard, ChinaUnionPay, BankCard, Voyager)',
			'g':'finance',
			'p': [
				{
					'n':'credit_card',
					'r': true,
					't':'string',
					'p':'4024007151839544'
				}
			]
		},
		{
			'k':'get-creditcard-type',
			'd':'Get Credit Card Type By Number',
			'ed':'Get credit card type (Visa, Mastercard, Diners Club, Carte Blanche, American Express, Discover, JCB, enRoute, Solo, Switch, Maestro, LaserCard, ChinaUnionPay, BankCard, Voyager)',
			'g':'finance',
			'p': [
				{
					'n':'credit_card',
					'r': true,
					't':'string',
					'p':'4024007151839544'
				}
			]
		},
		{
			'k':'get-address-by-search',
			'd':'Get Exact Address By Search',
			'ed':'Get an exact address (street name, number, city, zipcode, province, region, country, latitude and longitude) by a partial address search',
			'g':'geographic',
			'p': [
				{
					'n':'address',
					'r': true,
					't':'string',
					'p':'Compte Mallorca, 120, Barcelona, España'
				}
			]
		},
		{
			'k':'get-coordinate-by-search',
			'd':'Get Coordinates By Search',
			'ed':'Discover latitude and longitude coordinates of a postal address',
			'g':'geographic',
			'p': [
				{
					'n':'address',
					'r': true,
					't':'string',
					'p':'Compte Urgell, 120, Barcelona, España'
				}
			]
		},
		{
			'k':'check-address-exist',
			'd':'Check Exact Address Exists',
			'ed':'Check if an exact address exists by a partial address search',
			'g':'geographic',
			'p': [
				{
					'n':'address',
					'r': true,
					't':'string',
					'p':'Compte Urgell, 120, Barcelona'
				},
				{
					'n':'country',
					'r': false,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-address-normalized',
			'd':'Get Normalized Address',
			'ed':'Allow to normalize an address, removing non allowed characters',
			'g':'geographic',
			'p': [
				{
					'n':'address',
					'r': true,
					't':'string',
					'p':'Compte Mallorca, 120, Barcelona Spain'
				}
			]
		},
		{
			'k':'check-address-number-exist',
			'd':'Check Street Number Exists',
			'ed':'Check if a house number exists by a partial address search',
			'g':'geographic',
			'p': [
				{
					'n':'address',
					'r': true,
					't':'string',
					'p':'Compte Urgell, 120, Barcelona'
				},
				{
					'n':'country',
					'r': false,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-address-splitted',
			'd':'Get Parsed Address',
			'ed':'Parse postal address into separated fields, getting a basic resolution',
			'g':'geographic',
			'p': [
				{
					'n':'address',
					'r': true,
					't':'string',
					'p':'Compte Mallorca, 120 08036 Barcelona Barcelona Spain'
				}
			]
		},
		{
			'k':'get-address-splitted-best',
			'd':'Get Improved Parsed Address',
			'ed':'Parse postal address into separated fields, getting an improved resolution',
			'g':'geographic',
			'p': [
				{
					'n':'address',
					'r': true,
					't':'string',
					'p':'Compte Mallorca, 120 08036 Barcelona Barcelona Spain'
				}
			]
		},
		{
			'k':'check-coordinate-valid',
			'd':'Check Valid Coordinates',
			'ed':'Check if coordinates have a valid format',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates',
					'r': true,
					't':'string',
					'p':'41.2522,-12.30'
				}
			]
		},
		{
			'k':'check-age-betw',
			'd':'Check Age Between',
			'ed':'Check if age is between two numbers',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				},
				{
					'n':'years1',
					'r': true,
					't':'string',
					'p':'35'
				},
				{
					'n':'years2',
					'r': true,
					't':'string',
					'p':'50'
				}
			]
		},
		{
			'k':'get-age-by-date',
			'd':'Get Age By Date',
			'ed':'Discover the age of a birth date (multiple formats allowed)',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				}
			]
		},
		{
			'k':'check-age-eq',
			'd':'Check Ages Are Equal',
			'ed':'Check if ages are equal',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				},
				{
					'n':'years',
					'r': true,
					't':'string',
					'p':'45'
				}
			]
		},
		{
			'k':'check-age-ge',
			'd':'Check Age Is Greater Or Equal',
			'ed':'Check if age is greater or equal than another',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				},
				{
					'n':'years',
					'r': true,
					't':'string',
					'p':'43'
				}
			]
		},
		{
			'k':'check-age-gt',
			'd':'Check Age Is Greater',
			'ed':'Check if age is greater than another',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				},
				{
					'n':'years',
					'r': true,
					't':'string',
					'p':'40'
				}
			]
		},
		{
			'k':'check-age-le',
			'd':'Check Age Is Lower Or Equal',
			'ed':'Check if age is lower or equal than another',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				},
				{
					'n':'years',
					'r': true,
					't':'string',
					'p':'46'
				}
			]
		},
		{
			'k':'check-age-lt',
			'd':'Check Age Is Lower',
			'ed':'Chekc if age is lower than another',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				},
				{
					'n':'years',
					'r': true,
					't':'string',
					'p':'46'
				}
			]
		},
		{
			'k':'check-asin-exist',
			'd':'Check ASIN Exists',
			'ed':'Check if a ASIN code exists on Amazon marketplace',
			'g':'product',
			'p': [
				{
					'n':'asin',
					'r': true,
					't':'string',
					'p':'B00005N5PF'
				}
			]
		},
		{
			'k':'check-asin-valid',
			'd':'Check ASIN Valid',
			'ed':'Check if a ASIN code has a valid format',
			'g':'product',
			'p': [
				{
					'n':'asin',
					'r': true,
					't':'string',
					'p':'B00005N5PF'
				}
			]
		},
		{
			'k':'get-audio-advanced-speech-by-text',
			'd':'Get Advanced Speech By Text',
			'ed':'Get advanced human audio file by provided text and language',
			'g':'audio',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi! My name is Miquel. I will read any text you type here.'
				},
				{
					'n':'gender',
					'r': true,
					't':'options',
					'p':'male',
					'o': [
						{
							'name':'Female',
							'value':'female'
						},
						{
							'name':'Male',
							'value':'male'
						}
					]
				},
				{
					'n':'language',
					'r': true,
					't':'options',
					'p':'american',
					'o': [
						{
							'name':'American',
							'value':'american'
						},
						{
							'name':'Arabic',
							'value':'arabic'
						},
						{
							'name':'Bengali',
							'value':'bengali'
						},
						{
							'name':'British',
							'value':'british'
						},
						{
							'name':'Czech',
							'value':'czech'
						},
						{
							'name':'Danish',
							'value':'danish'
						},
						{
							'name':'Dutch',
							'value':'dutch'
						},
						{
							'name':'Filipino',
							'value':'filipino'
						},
						{
							'name':'Finnish',
							'value':'finnish'
						},
						{
							'name':'French',
							'value':'french'
						},
						{
							'name':'German',
							'value':'german'
						},
						{
							'name':'Greek',
							'value':'greek'
						},
						{
							'name':'Gujurati',
							'value':'gujurati'
						},
						{
							'name':'Hindi',
							'value':'hindi'
						},
						{
							'name':'Hungarian',
							'value':'hungarian'
						},
						{
							'name':'Indonesian',
							'value':'indonesian'
						},
						{
							'name':'Italian',
							'value':'italian'
						},
						{
							'name':'Japanese',
							'value':'japanese'
						},
						{
							'name':'Kannada',
							'value':'kannada'
						},
						{
							'name':'Korean',
							'value':'korean'
						},
						{
							'name':'Malayalam',
							'value':'malayalam'
						},
						{
							'name':'Mandarin',
							'value':'mandarin'
						},
						{
							'name':'Norwegian',
							'value':'norwegian'
						},
						{
							'name':'Polish',
							'value':'polish'
						},
						{
							'name':'Portuguese',
							'value':'portuguese'
						},
						{
							'name':'Russian',
							'value':'russian'
						},
						{
							'name':'Slovak',
							'value':'slovak'
						},
						{
							'name':'Spanish',
							'value':'spanish'
						},
						{
							'name':'Tamil',
							'value':'tamil'
						},
						{
							'name':'Telugu',
							'value':'telugu'
						},
						{
							'name':'Thai',
							'value':'thai'
						},
						{
							'name':'Turkish',
							'value':'turkish'
						},
						{
							'name':'Ukranian',
							'value':'ukranian'
						},
						{
							'name':'Vietnamese',
							'value':'vietnamese'
						}
					]
				}
			]
		},
		{
			'k':'get-audio-speech-by-text',
			'd':'Get Speech By Text',
			'ed':'Get audio file by provided text and language',
			'g':'audio',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi! My name is Miquel. I will read any text you type here.'
				},
				{
					'n':'gender',
					'r': true,
					't':'options',
					'p':'male',
					'o': [
						{
							'name':'Female',
							'value':'female'
						},
						{
							'name':'Male',
							'value':'male'
						}
					]
				},
				{
					'n':'language',
					'r': true,
					't':'options',
					'p':'american',
					'o': [
						{
							'name':'American',
							'value':'american'
						},
						{
							'name':'French',
							'value':'french'
						},
						{
							'name':'German',
							'value':'german'
						},
						{
							'name':'Italian',
							'value':'italian'
						},
						{
							'name':'Japanese',
							'value':'japanese'
						},
						{
							'name':'Portuguese',
							'value':'portuguese'
						},
						{
							'name':'Russian',
							'value':'russian'
						},
						{
							'name':'Spanish',
							'value':'spanish'
						}
					]
				}
			]
		},
		{
			'k':'check-bank-account-valid-es',
			'd':'Check Bank Account Is Valid (ES)',
			'ed':'Discover if account number has a valid format',
			'g':'finance',
			'p': [
				{
					'n':'account',
					'r': true,
					't':'string',
					'p':'14650120311716144388'
				}
			]
		},
		{
			'k':'check-bank-bic-valid',
			'd':'Check BIC Is Valid',
			'ed':'Discover if BIC number has a valid format',
			'g':'finance',
			'p': [
				{
					'n':'bic',
					'r': true,
					't':'string',
					'p':'DABAIE2D'
				}
			]
		},
		{
			'k':'get-bank-iban-by-account',
			'd':'Get IBAN By Account',
			'ed':'Get IBAN number by account number of the country',
			'g':'finance',
			'p': [
				{
					'n':'account',
					'r': true,
					't':'string',
					'p':'14650120311716144388'
				},
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-bank-iban-lookup',
			'd':'Get IBAN Lookup',
			'ed':'Get to search data bank information by IBAN account number',
			'g':'finance',
			'p': [
				{
					'n':'iban',
					'r': true,
					't':'string',
					'p':'NL91ABNA0417164300'
				}
			]
		},
		{
			'k':'check-bank-iban-valid',
			'd':'Check IBAN Is Valid',
			'ed':'Discover if IBAN account number has a valid format',
			'g':'finance',
			'p': [
				{
					'n':'iban',
					'r': true,
					't':'string',
					'p':'ES3314650120311716144388'
				}
			]
		},
		{
			'k':'get-barcode-encoded',
			'd':'Get Encoded Barcode',
			'ed':'Get an encoded barcode by number and required standard',
			'g':'image',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'0635753490879'
				},
				{
					'n':'bcid',
					'r': true,
					't':'options',
					'p':'ean13',
					'o': [
						{
							'name':'Auspost',
							'value':'auspost'
						},
						{
							'name':'Azteccode',
							'value':'azteccode'
						},
						{
							'name':'Azteccodecompact',
							'value':'azteccodecompact'
						},
						{
							'name':'Aztecrune',
							'value':'aztecrune'
						},
						{
							'name':'Bc412',
							'value':'bc412'
						},
						{
							'name':'Channelcode',
							'value':'channelcode'
						},
						{
							'name':'Codablockf',
							'value':'codablockf'
						},
						{
							'name':'Code11',
							'value':'code11'
						},
						{
							'name':'Code128',
							'value':'code128'
						},
						{
							'name':'Code16k',
							'value':'code16k'
						},
						{
							'name':'Code2of5',
							'value':'code2of5'
						},
						{
							'name':'Code32',
							'value':'code32'
						},
						{
							'name':'Code39',
							'value':'code39'
						},
						{
							'name':'Code39ext',
							'value':'code39ext'
						},
						{
							'name':'Code49',
							'value':'code49'
						},
						{
							'name':'Code93',
							'value':'code93'
						},
						{
							'name':'Code93ext',
							'value':'code93ext'
						},
						{
							'name':'Codeone',
							'value':'codeone'
						},
						{
							'name':'Coop2of5',
							'value':'coop2of5'
						},
						{
							'name':'Daft',
							'value':'daft'
						},
						{
							'name':'Databarexpanded',
							'value':'databarexpanded'
						},
						{
							'name':'Databarexpandedcomposite',
							'value':'databarexpandedcomposite'
						},
						{
							'name':'Databarexpandedstacked',
							'value':'databarexpandedstacked'
						},
						{
							'name':'Databarexpandedstackedcomposite',
							'value':'databarexpandedstackedcomposite'
						},
						{
							'name':'Databarlimited',
							'value':'databarlimited'
						},
						{
							'name':'Databarlimitedcomposite',
							'value':'databarlimitedcomposite'
						},
						{
							'name':'Databaromni',
							'value':'databaromni'
						},
						{
							'name':'Databaromnicomposite',
							'value':'databaromnicomposite'
						},
						{
							'name':'Databarstacked',
							'value':'databarstacked'
						},
						{
							'name':'Databarstackedcomposite',
							'value':'databarstackedcomposite'
						},
						{
							'name':'Databarstackedomni',
							'value':'databarstackedomni'
						},
						{
							'name':'Databarstackedomnicomposite',
							'value':'databarstackedomnicomposite'
						},
						{
							'name':'Databartruncated',
							'value':'databartruncated'
						},
						{
							'name':'Databartruncatedcomposite',
							'value':'databartruncatedcomposite'
						},
						{
							'name':'Datalogic2of5',
							'value':'datalogic2of5'
						},
						{
							'name':'Datamatrix',
							'value':'datamatrix'
						},
						{
							'name':'Datamatrixrectangular',
							'value':'datamatrixrectangular'
						},
						{
							'name':'Dotcode',
							'value':'dotcode'
						},
						{
							'name':'Ean13',
							'value':'ean13'
						},
						{
							'name':'Ean13composite',
							'value':'ean13composite'
						},
						{
							'name':'Ean14',
							'value':'ean14'
						},
						{
							'name':'Ean2',
							'value':'ean2'
						},
						{
							'name':'Ean5',
							'value':'ean5'
						},
						{
							'name':'Ean8',
							'value':'ean8'
						},
						{
							'name':'Ean8composite',
							'value':'ean8composite'
						},
						{
							'name':'Flattermarken',
							'value':'flattermarken'
						},
						{
							'name':'Gs1-128',
							'value':'gs1-128'
						},
						{
							'name':'Gs1-128composite',
							'value':'gs1-128composite'
						},
						{
							'name':'Gs1-cc',
							'value':'gs1-cc'
						},
						{
							'name':'Gs1datamatrix',
							'value':'gs1datamatrix'
						},
						{
							'name':'Gs1datamatrixrectangular',
							'value':'gs1datamatrixrectangular'
						},
						{
							'name':'Gs1northamericancoupon',
							'value':'gs1northamericancoupon'
						},
						{
							'name':'Hanxin',
							'value':'hanxin'
						},
						{
							'name':'Hibcazteccode',
							'value':'hibcazteccode'
						},
						{
							'name':'Hibccodablockf',
							'value':'hibccodablockf'
						},
						{
							'name':'Hibccode128',
							'value':'hibccode128'
						},
						{
							'name':'Hibccode39',
							'value':'hibccode39'
						},
						{
							'name':'Hibcdatamatrix',
							'value':'hibcdatamatrix'
						},
						{
							'name':'Hibcdatamatrixrectangular',
							'value':'hibcdatamatrixrectangular'
						},
						{
							'name':'Hibcmicropdf417',
							'value':'hibcmicropdf417'
						},
						{
							'name':'Hibcpdf417',
							'value':'hibcpdf417'
						},
						{
							'name':'Iata2of5',
							'value':'iata2of5'
						},
						{
							'name':'Identcode',
							'value':'identcode'
						},
						{
							'name':'Industrial2of5',
							'value':'industrial2of5'
						},
						{
							'name':'Interleaved2of5',
							'value':'interleaved2of5'
						},
						{
							'name':'Isbn',
							'value':'isbn'
						},
						{
							'name':'Ismn',
							'value':'ismn'
						},
						{
							'name':'Issn',
							'value':'issn'
						},
						{
							'name':'Itf14',
							'value':'itf14'
						},
						{
							'name':'Japanpost',
							'value':'japanpost'
						},
						{
							'name':'Kix',
							'value':'kix'
						},
						{
							'name':'Leitcode',
							'value':'leitcode'
						},
						{
							'name':'Matrix2of5',
							'value':'matrix2of5'
						},
						{
							'name':'Maxicode',
							'value':'maxicode'
						},
						{
							'name':'Micropdf417',
							'value':'micropdf417'
						},
						{
							'name':'Msi',
							'value':'msi'
						},
						{
							'name':'Onecode',
							'value':'onecode'
						},
						{
							'name':'Pdf417',
							'value':'pdf417'
						},
						{
							'name':'Pdf417compact',
							'value':'pdf417compact'
						},
						{
							'name':'Pharmacode',
							'value':'pharmacode'
						},
						{
							'name':'Pharmacode2',
							'value':'pharmacode2'
						},
						{
							'name':'Planet',
							'value':'planet'
						},
						{
							'name':'Plessey',
							'value':'plessey'
						},
						{
							'name':'Posicode',
							'value':'posicode'
						},
						{
							'name':'Postnet',
							'value':'postnet'
						},
						{
							'name':'Pzn',
							'value':'pzn'
						},
						{
							'name':'RationalizedCodabar',
							'value':'rationalizedCodabar'
						},
						{
							'name':'Raw',
							'value':'raw'
						},
						{
							'name':'Royalmail',
							'value':'royalmail'
						},
						{
							'name':'Sscc18',
							'value':'sscc18'
						},
						{
							'name':'Symbol',
							'value':'symbol'
						},
						{
							'name':'Telepen',
							'value':'telepen'
						},
						{
							'name':'Telepennumeric',
							'value':'telepennumeric'
						},
						{
							'name':'Ultracode',
							'value':'ultracode'
						},
						{
							'name':'Upca',
							'value':'upca'
						},
						{
							'name':'Upcacomposite',
							'value':'upcacomposite'
						},
						{
							'name':'Upce',
							'value':'upce'
						},
						{
							'name':'Upcecomposite',
							'value':'upcecomposite'
						}
					]
				}
			]
		},
		{
			'k':'get-book-author-lookup',
			'd':'Get Book By Author',
			'ed':`Get book by author's surname`,
			'g':'product',
			'p': [
				{
					'n':'author',
					'r': true,
					't':'string',
					'p':'Albert Einstein'
				}
			]
		},
		{
			'k':'get-book-category-lookup',
			'd':'Get Book By Category',
			'ed':'Get all publications by category',
			'g':'product',
			'p': [
				{
					'n':'category',
					'r': true,
					't':'string',
					'p':'science'
				}
			]
		},
		{
			'k':'check-book-isbn',
			'd':'Check ISBN Code Is Valid',
			'ed':'Allow to check if an ISBN10/13 code has a valid format',
			'g':'product',
			'p': [
				{
					'n':'isbn',
					'r': true,
					't':'string',
					'p':'0306406152'
				}
			]
		},
		{
			'k':'check-book-isbn-exist',
			'd':'Check ISBN Code Exists',
			'ed':'Allow to check if an ISBN book exist',
			'g':'product',
			'p': [
				{
					'n':'isbn',
					'r': true,
					't':'string',
					'p':'9780306406157'
				}
			]
		},
		{
			'k':'get-book-isbn-lookup',
			'd':'Get Book By ISBN',
			'ed':'Get book or publication data by 10 or 13 digits ISBN code',
			'g':'product',
			'p': [
				{
					'n':'isbn',
					'r': true,
					't':'string',
					'p':'9780306406157'
				}
			]
		},
		{
			'k':'check-book-isbn10',
			'd':'Check ISBN10 Code Is Valid',
			'ed':'Allow to check if an ISBN10 code has a valid format',
			'g':'product',
			'p': [
				{
					'n':'isbn',
					'r': true,
					't':'string',
					'p':'0306406152'
				}
			]
		},
		{
			'k':'check-book-isbn13',
			'd':'Check ISBN13 Code Is Valid',
			'ed':'Allow to check if an ISBN13 code has a valid format',
			'g':'product',
			'p': [
				{
					'n':'isbn',
					'r': true,
					't':'string',
					'p':'9780306406157'
				}
			]
		},
		{
			'k':'get-book-list-author-lookup',
			'd':'Get Books By Author',
			'ed':`Get books by author's surname`,
			'g':'product',
			'p': [
				{
					'n':'author',
					'r': true,
					't':'string',
					'p':'Albert Einstein'
				}
			]
		},
		{
			'k':'get-book-list-category-lookup',
			'd':'Get Books By Category',
			'ed':'Get all books by category',
			'g':'product',
			'p': [
				{
					'n':'category',
					'r': true,
					't':'string',
					'p':'science'
				}
			]
		},
		{
			'k':'get-book-list-publisher-lookup',
			'd':'Get Books By Editor',
			'ed':'Get all books by editor',
			'g':'product',
			'p': [
				{
					'n':'publisher',
					'r': true,
					't':'string',
					'p':'Grupo RBA'
				}
			]
		},
		{
			'k':'get-book-list-title-lookup',
			'd':'Get Books By Title',
			'ed':'Get all books by title',
			'g':'product',
			'p': [
				{
					'n':'title',
					'r': true,
					't':'string',
					'p':'Science'
				}
			]
		},
		{
			'k':'get-book-publisher-lookup',
			'd':'Get Book By Editor',
			'ed':`Get book data by editor's name`,
			'g':'product',
			'p': [
				{
					'n':'publisher',
					'r': true,
					't':'string',
					'p':'Grupo RBA'
				}
			]
		},
		{
			'k':'get-book-title-lookup',
			'd':'Get Book By Title',
			'ed':'Get book data by title',
			'g':'product',
			'p': [
				{
					'n':'title',
					'r': true,
					't':'string',
					'p':'La empresa más feliz del mundo'
				}
			]
		},
		{
			'k':'get-nif-by-dni',
			'd':'Get NIF By DNI (ES)',
			'ed':'Discover the letter of a dni card number',
			'g':'personal',
			'p': [
				{
					'n':'dni',
					'r': true,
					't':'string',
					'p':'44016116'
				}
			]
		},
		{
			'k':'get-cif-normalized',
			'd':'Get Normalized CIF',
			'ed':'Allow to normalize a CIF number, removing non allowed characters',
			'g':'company',
			'p': [
				{
					'n':'cif',
					'r': true,
					't':'string',
					'p':'B 62084 959'
				}
			]
		},
		{
			'k':'get-dni-normalized',
			'd':'Get Normalized DNI (ES)',
			'ed':'Allow to normalize a DNI number, removing non allowed characters',
			'g':'personal',
			'p': [
				{
					'n':'dni',
					'r': true,
					't':'string',
					'p':'44016a116'
				}
			]
		},
		{
			'k':'get-nie-normalized',
			'd':'Get Normalized NIE (ES)',
			'ed':'Allow to normalize a NIE number, removing non allowed characters',
			'g':'personal',
			'p': [
				{
					'n':'nie',
					'r': true,
					't':'string',
					'p':'X402001 122g'
				}
			]
		},
		{
			'k':'get-nif-normalized',
			'd':'Get Normalized NIF (ES)',
			'ed':'Allow to normalize a NIF number, removing non allowed characters',
			'g':'personal',
			'p': [
				{
					'n':'nif',
					'r': true,
					't':'string',
					'p':'402001 122g'
				}
			]
		},
		{
			'k':'check-cif-valid',
			'd':'Check CIF Is Valid (ES)',
			'ed':'Discover if a cif card number is valid',
			'g':'company',
			'p': [
				{
					'n':'cif',
					'r': true,
					't':'string',
					'p':'A58818501'
				}
			]
		},
		{
			'k':'check-dni-valid',
			'd':'Check Valid Dni (ES)',
			'ed':'Discover if a dni card number is valid',
			'g':'personal',
			'p': [
				{
					'n':'dni',
					'r': true,
					't':'string',
					'p':'44016116'
				}
			]
		},
		{
			'k':'check-nie-valid',
			'd':'Check NIE Is Valid (ES)',
			'ed':'Discover if a NIE card number is valid',
			'g':'personal',
			'p': [
				{
					'n':'nie',
					'r': true,
					't':'string',
					'p':'Y2918527W'
				}
			]
		},
		{
			'k':'check-nif-valid',
			'd':'Check NIF Is Valid (ES)',
			'ed':'Discover if a nif card number is valid',
			'g':'personal',
			'p': [
				{
					'n':'nif',
					'r': true,
					't':'string',
					'p':'44016116G'
				}
			]
		},
		{
			'k':'get-city-by-ip',
			'd':'Get City By IP',
			'ed':'Get city from ip',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-city-by-name',
			'd':'Get City By Name (ES)',
			'ed':'City search by partial name (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'city',
					'r': true,
					't':'string',
					'p':'Bar'
				}
			]
		},
		{
			'k':'get-city-by-phone',
			'd':'Get City By Phone (ES)',
			'ed':'Discover the city name by the local phone number (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'932187670'
				}
			]
		},
		{
			'k':'get-city-by-zipcode',
			'd':'Get City By Zipcode (ES)',
			'ed':'Discover the city name by the zipcode (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'08012'
				}
			]
		},
		{
			'k':'get-city-list-by-name',
			'd':'Get Cities By Prefix (ES)',
			'ed':'Get multiple cities by partial initial text (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'city',
					'r': true,
					't':'string',
					'p':'Barce'
				}
			]
		},
		{
			'k':'get-city-list-by-phone',
			'd':'Get Cities By Phone (ES)',
			'ed':'Get multiple cities by phone prefix (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'938499145'
				}
			]
		},
		{
			'k':'get-city-list-by-zipcode',
			'd':'Get Cities By Zipcode (ES)',
			'ed':'Get multiple cities by zipcode prefix (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'234'
				}
			]
		},
		{
			'k':'get-city-normalized',
			'd':'Get Normalized City',
			'ed':'Allow to normalize a city, removing non allowed characters',
			'g':'geographic',
			'p': [
				{
					'n':'city',
					'r': true,
					't':'string',
					'p':'Barc3l0na'
				}
			]
		},
		{
			'k':'check-ean-13-valid',
			'd':'Check EAN13 Is Valid',
			'ed':'Check if a EAN barcode of 13 digits has a valid format',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'4006381333931'
				}
			]
		},
		{
			'k':'check-gtin-13-valid',
			'd':'Check GTIN13 Is Valid',
			'ed':'Check if a GTIN barcode of 13 digits has a valid format',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'4006381333931'
				}
			]
		},
		{
			'k':'check-ean-14-valid',
			'd':'Check EAN14 Is Valid',
			'ed':'Check if a EAN barcode of 14 digits has a valid format',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'04006381333931'
				}
			]
		},
		{
			'k':'check-gtin-14-valid',
			'd':'Check GTIN14 Is Valid',
			'ed':'Check if a GTIN barcode of 14 digits has a valid format',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'04006381333931'
				}
			]
		},
		{
			'k':'check-ean-18-valid',
			'd':'Check EAN18 Is Valid',
			'ed':'Check if a EAN barcode of 18 digits has a valid format',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'000004006381333931'
				}
			]
		},
		{
			'k':'check-ean-8-valid',
			'd':'Check EAN8 Is Valid',
			'ed':'Check if a EAN barcode of 8 digits has a valid format',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'40063812'
				}
			]
		},
		{
			'k':'check-gtin-8-valid',
			'd':'Check GTIN8 Is Valid',
			'ed':'Check if a GTIN barcode of 8 digits has a valid format',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'40063812'
				}
			]
		},
		{
			'k':'check-ean-exist',
			'd':'Check EAN Exists',
			'ed':'Check if a EAN code exists on Amazon Marketplace (.com supported)',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'0635753490879'
				}
			]
		},
		{
			'k':'check-upc-exist',
			'd':'Check UPC Exists',
			'ed':'Check if a UPC code exists',
			'g':'product',
			'p': [
				{
					'n':'upc',
					'r': true,
					't':'string',
					'p':'635753490879'
				}
			]
		},
		{
			'k':'check-upc-format',
			'd':'Check UPC Has Valid Format',
			'ed':'Check if a UPC code has a valid format',
			'g':'product',
			'p': [
				{
					'n':'upc',
					'r': true,
					't':'string',
					'p':'635753490879'
				}
			]
		},
		{
			'k':'check-number-isin',
			'd':'Check ISIN Code Is Valid',
			'ed':'Check if ISIN number is valid',
			'g':'company',
			'p': [
				{
					'n':'isin',
					'r': true,
					't':'string',
					'p':'US0378331005'
				}
			]
		},
		{
			'k':'get-upc-lookup',
			'd':'Get Product By UPC',
			'ed':'Get product data of an UPC code on Amazon Marketplace (.com supported)',
			'g':'product',
			'p': [
				{
					'n':'upc',
					'r': true,
					't':'string',
					'p':'635753490879'
				}
			]
		},
		{
			'k':'check-number-ss-es',
			'd':'Check Social Security Number Is Valid (ES)',
			'ed':'Check if SS number is valid, only for Spain',
			'g':'company',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'998239812282'
				}
			]
		},
		{
			'k':'check-number-uuid',
			'd':'Check UUID Number Is Valid',
			'ed':'Check if it a valid UUID number',
			'g':'security',
			'p': [
				{
					'n':'uuid',
					'r': true,
					't':'string',
					'p':'550e8400-e29b-41d4-a716-446655440000'
				}
			]
		},
		{
			'k':'check-ean-valid',
			'd':'Check EAN Is Valid',
			'ed':'Check if a EAN barcode (8 or 13 digits) has a valid format',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'40063812'
				}
			]
		},
		{
			'k':'check-gtin-valid',
			'd':'Check GTIN Is Valid',
			'ed':'Check if a GTIN barcode (8 or 13 digits) has a valid format',
			'g':'product',
			'p': [
				{
					'n':'ean',
					'r': true,
					't':'string',
					'p':'40063812'
				}
			]
		},
		{
			'k':'get-community-by-zipcode',
			'd':'Get Community By Zipcode (ES)',
			'ed':'Discover the community name from a zipcode number (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'08012'
				}
			]
		},
		{
			'k':'get-company-by-cif',
			'd':'Get Company By CIF (ES)',
			'ed':'Get company data by CIF',
			'g':'company',
			'p': [
				{
					'n':'cif',
					'r': true,
					't':'string',
					'p':'B66998592'
				}
			]
		},
		{
			'k':'get-company-by-domain',
			'd':'Get Company By Domain',
			'ed':'Get company data by domain',
			'g':'company',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'killia.com'
				}
			]
		},
		{
			'k':'get-company-by-duns',
			'd':'Get Company By DUNS (ES)',
			'ed':'Get company data by DUNS',
			'g':'company',
			'p': [
				{
					'n':'duns',
					'r': true,
					't':'string',
					'p':'464016690'
				}
			]
		},
		{
			'k':'get-company-by-email',
			'd':'Get Company By Email',
			'ed':'Get company data by email',
			'g':'company',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'hello@killia.com'
				}
			]
		},
		{
			'k':'get-company-by-ip',
			'd':'Get Company By IP',
			'ed':'Get company data by IP address',
			'g':'company',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'74.125.228.72'
				}
			]
		},
		{
			'k':'get-company-by-name',
			'd':'Get Company By Name',
			'ed':'Get company data by name',
			'g':'company',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Cyberclick S.L.'
				},
				{
					'n':'country',
					'r': false,
					't':'options',
					'p':'Spain',
					'o': [
						{
							'name':'Afghanistan',
							'value':'Afghanistan'
						},
						{
							'name':'Albania',
							'value':'Albania'
						},
						{
							'name':'Algeria',
							'value':'Algeria'
						},
						{
							'name':'American Samoa',
							'value':'American Samoa'
						},
						{
							'name':'Andorra',
							'value':'Andorra'
						},
						{
							'name':'Angola',
							'value':'Angola'
						},
						{
							'name':'Anguilla',
							'value':'Anguilla'
						},
						{
							'name':'Antarctica',
							'value':'Antarctica'
						},
						{
							'name':'Antigua And Barbuda',
							'value':'Antigua And Barbuda'
						},
						{
							'name':'Argentina',
							'value':'Argentina'
						},
						{
							'name':'Armenia',
							'value':'Armenia'
						},
						{
							'name':'Aruba',
							'value':'Aruba'
						},
						{
							'name':'Australia',
							'value':'Australia'
						},
						{
							'name':'Austria',
							'value':'Austria'
						},
						{
							'name':'Azerbaijan',
							'value':'Azerbaijan'
						},
						{
							'name':'Bahamas',
							'value':'Bahamas'
						},
						{
							'name':'Bahrain',
							'value':'Bahrain'
						},
						{
							'name':'Bangladesh',
							'value':'Bangladesh'
						},
						{
							'name':'Barbados',
							'value':'Barbados'
						},
						{
							'name':'Belarus',
							'value':'Belarus'
						},
						{
							'name':'Belgium',
							'value':'Belgium'
						},
						{
							'name':'Belize',
							'value':'Belize'
						},
						{
							'name':'Benin',
							'value':'Benin'
						},
						{
							'name':'Bermuda',
							'value':'Bermuda'
						},
						{
							'name':'Bhutan',
							'value':'Bhutan'
						},
						{
							'name':'Bolivia',
							'value':'Bolivia'
						},
						{
							'name':'Bosnia And Herzegovina',
							'value':'Bosnia And Herzegovina'
						},
						{
							'name':'Botswana',
							'value':'Botswana'
						},
						{
							'name':'Bouvet Island',
							'value':'Bouvet Island'
						},
						{
							'name':'Brazil',
							'value':'Brazil'
						},
						{
							'name':'British Indian Ocean Territory',
							'value':'British Indian Ocean Territory'
						},
						{
							'name':'Brunei Darussalam',
							'value':'Brunei Darussalam'
						},
						{
							'name':'Bulgaria',
							'value':'Bulgaria'
						},
						{
							'name':'Burkina Faso',
							'value':'Burkina Faso'
						},
						{
							'name':'Burundi',
							'value':'Burundi'
						},
						{
							'name':'Cambodia',
							'value':'Cambodia'
						},
						{
							'name':'Cameroon',
							'value':'Cameroon'
						},
						{
							'name':'Canada',
							'value':'Canada'
						},
						{
							'name':'Cape Verde',
							'value':'Cape Verde'
						},
						{
							'name':'Cayman Islands',
							'value':'Cayman Islands'
						},
						{
							'name':'Central African Republic',
							'value':'Central African Republic'
						},
						{
							'name':'Chad',
							'value':'Chad'
						},
						{
							'name':'Chile',
							'value':'Chile'
						},
						{
							'name':'China',
							'value':'China'
						},
						{
							'name':'Christmas Island',
							'value':'Christmas Island'
						},
						{
							'name':'Cocos (keeling) Islands',
							'value':'Cocos (keeling) Islands'
						},
						{
							'name':'Colombia',
							'value':'Colombia'
						},
						{
							'name':'Comoros',
							'value':'Comoros'
						},
						{
							'name':'Congo',
							'value':'Congo'
						},
						{
							'name':'Congo, The Democratic Republic Of The',
							'value':'Congo, The Democratic Republic Of The'
						},
						{
							'name':'Cook Islands',
							'value':'Cook Islands'
						},
						{
							'name':'Costa Rica',
							'value':'Costa Rica'
						},
						{
							'name':`Cote D'ivoire`,
							'value':`Cote D'ivoire`
						},
						{
							'name':'Croatia',
							'value':'Croatia'
						},
						{
							'name':'Cuba',
							'value':'Cuba'
						},
						{
							'name':'Cyprus',
							'value':'Cyprus'
						},
						{
							'name':'Czech Republic',
							'value':'Czech Republic'
						},
						{
							'name':'Denmark',
							'value':'Denmark'
						},
						{
							'name':'Djibouti',
							'value':'Djibouti'
						},
						{
							'name':'Dominica',
							'value':'Dominica'
						},
						{
							'name':'Dominican Republic',
							'value':'Dominican Republic'
						},
						{
							'name':'East Timor',
							'value':'East Timor'
						},
						{
							'name':'Ecuador',
							'value':'Ecuador'
						},
						{
							'name':'Egypt',
							'value':'Egypt'
						},
						{
							'name':'El Salvador',
							'value':'El Salvador'
						},
						{
							'name':'Equatorial Guinea',
							'value':'Equatorial Guinea'
						},
						{
							'name':'Eritrea',
							'value':'Eritrea'
						},
						{
							'name':'Estonia',
							'value':'Estonia'
						},
						{
							'name':'Ethiopia',
							'value':'Ethiopia'
						},
						{
							'name':'Falkland Islands (malvinas)',
							'value':'Falkland Islands (malvinas)'
						},
						{
							'name':'Faroe Islands',
							'value':'Faroe Islands'
						},
						{
							'name':'Fiji',
							'value':'Fiji'
						},
						{
							'name':'Finland',
							'value':'Finland'
						},
						{
							'name':'France',
							'value':'France'
						},
						{
							'name':'French Guiana',
							'value':'French Guiana'
						},
						{
							'name':'French Polynesia',
							'value':'French Polynesia'
						},
						{
							'name':'French Southern Territories',
							'value':'French Southern Territories'
						},
						{
							'name':'Gabon',
							'value':'Gabon'
						},
						{
							'name':'Gambia',
							'value':'Gambia'
						},
						{
							'name':'Georgia',
							'value':'Georgia'
						},
						{
							'name':'Germany',
							'value':'Germany'
						},
						{
							'name':'Ghana',
							'value':'Ghana'
						},
						{
							'name':'Gibraltar',
							'value':'Gibraltar'
						},
						{
							'name':'Greece',
							'value':'Greece'
						},
						{
							'name':'Greenland',
							'value':'Greenland'
						},
						{
							'name':'Grenada',
							'value':'Grenada'
						},
						{
							'name':'Guadeloupe',
							'value':'Guadeloupe'
						},
						{
							'name':'Guam',
							'value':'Guam'
						},
						{
							'name':'Guatemala',
							'value':'Guatemala'
						},
						{
							'name':'Guinea',
							'value':'Guinea'
						},
						{
							'name':'Guinea-bissau',
							'value':'Guinea-bissau'
						},
						{
							'name':'Guyana',
							'value':'Guyana'
						},
						{
							'name':'Haiti',
							'value':'Haiti'
						},
						{
							'name':'Heard Island And Mcdonald Islands',
							'value':'Heard Island And Mcdonald Islands'
						},
						{
							'name':'Holy See (vatican City State)',
							'value':'Holy See (vatican City State)'
						},
						{
							'name':'Honduras',
							'value':'Honduras'
						},
						{
							'name':'Hong Kong',
							'value':'Hong Kong'
						},
						{
							'name':'Hungary',
							'value':'Hungary'
						},
						{
							'name':'Iceland',
							'value':'Iceland'
						},
						{
							'name':'India',
							'value':'India'
						},
						{
							'name':'Indonesia',
							'value':'Indonesia'
						},
						{
							'name':'Iran, Islamic Republic Of',
							'value':'Iran, Islamic Republic Of'
						},
						{
							'name':'Iraq',
							'value':'Iraq'
						},
						{
							'name':'Ireland',
							'value':'Ireland'
						},
						{
							'name':'Israel',
							'value':'Israel'
						},
						{
							'name':'Italy',
							'value':'Italy'
						},
						{
							'name':'Jamaica',
							'value':'Jamaica'
						},
						{
							'name':'Japan',
							'value':'Japan'
						},
						{
							'name':'Jordan',
							'value':'Jordan'
						},
						{
							'name':'Kazakstan',
							'value':'Kazakstan'
						},
						{
							'name':'Kenya',
							'value':'Kenya'
						},
						{
							'name':'Kiribati',
							'value':'Kiribati'
						},
						{
							'name':`Korea, Democratic People's Republic Of`,
							'value':`Korea, Democratic People's Republic Of`,
						},
						{
							'name':'Korea, Republic Of',
							'value':'Korea, Republic Of'
						},
						{
							'name':'Kosovo',
							'value':'Kosovo'
						},
						{
							'name':'Kuwait',
							'value':'Kuwait'
						},
						{
							'name':'Kyrgyzstan',
							'value':'Kyrgyzstan'
						},
						{
							'name':`Lao People's Democratic Republic`,
							'value':`Lao People's Democratic Republic`,
						},
						{
							'name':'Latvia',
							'value':'Latvia'
						},
						{
							'name':'Lebanon',
							'value':'Lebanon'
						},
						{
							'name':'Lesotho',
							'value':'Lesotho'
						},
						{
							'name':'Liberia',
							'value':'Liberia'
						},
						{
							'name':'Libyan Arab Jamahiriya',
							'value':'Libyan Arab Jamahiriya'
						},
						{
							'name':'Liechtenstein',
							'value':'Liechtenstein'
						},
						{
							'name':'Lithuania',
							'value':'Lithuania'
						},
						{
							'name':'Luxembourg',
							'value':'Luxembourg'
						},
						{
							'name':'Macau',
							'value':'Macau'
						},
						{
							'name':'Macedonia, The Former Yugoslav Republic Of',
							'value':'Macedonia, The Former Yugoslav Republic Of'
						},
						{
							'name':'Madagascar',
							'value':'Madagascar'
						},
						{
							'name':'Malawi',
							'value':'Malawi'
						},
						{
							'name':'Malaysia',
							'value':'Malaysia'
						},
						{
							'name':'Maldives',
							'value':'Maldives'
						},
						{
							'name':'Mali',
							'value':'Mali'
						},
						{
							'name':'Malta',
							'value':'Malta'
						},
						{
							'name':'Marshall Islands',
							'value':'Marshall Islands'
						},
						{
							'name':'Martinique',
							'value':'Martinique'
						},
						{
							'name':'Mauritania',
							'value':'Mauritania'
						},
						{
							'name':'Mauritius',
							'value':'Mauritius'
						},
						{
							'name':'Mayotte',
							'value':'Mayotte'
						},
						{
							'name':'Mexico',
							'value':'Mexico'
						},
						{
							'name':'Micronesia, Federated States Of',
							'value':'Micronesia, Federated States Of'
						},
						{
							'name':'Moldova, Republic Of',
							'value':'Moldova, Republic Of'
						},
						{
							'name':'Monaco',
							'value':'Monaco'
						},
						{
							'name':'Mongolia',
							'value':'Mongolia'
						},
						{
							'name':'Montenegro',
							'value':'Montenegro'
						},
						{
							'name':'Montserrat',
							'value':'Montserrat'
						},
						{
							'name':'Morocco',
							'value':'Morocco'
						},
						{
							'name':'Mozambique',
							'value':'Mozambique'
						},
						{
							'name':'Myanmar',
							'value':'Myanmar'
						},
						{
							'name':'Namibia',
							'value':'Namibia'
						},
						{
							'name':'Nauru',
							'value':'Nauru'
						},
						{
							'name':'Nepal',
							'value':'Nepal'
						},
						{
							'name':'Netherlands',
							'value':'Netherlands'
						},
						{
							'name':'Netherlands Antilles',
							'value':'Netherlands Antilles'
						},
						{
							'name':'New Caledonia',
							'value':'New Caledonia'
						},
						{
							'name':'New Zealand',
							'value':'New Zealand'
						},
						{
							'name':'Nicaragua',
							'value':'Nicaragua'
						},
						{
							'name':'Niger',
							'value':'Niger'
						},
						{
							'name':'Nigeria',
							'value':'Nigeria'
						},
						{
							'name':'Niue',
							'value':'Niue'
						},
						{
							'name':'Norfolk Island',
							'value':'Norfolk Island'
						},
						{
							'name':'Northern Mariana Islands',
							'value':'Northern Mariana Islands'
						},
						{
							'name':'Norway',
							'value':'Norway'
						},
						{
							'name':'Oman',
							'value':'Oman'
						},
						{
							'name':'Pakistan',
							'value':'Pakistan'
						},
						{
							'name':'Palau',
							'value':'Palau'
						},
						{
							'name':'Palestinian Territory, Occupied',
							'value':'Palestinian Territory, Occupied'
						},
						{
							'name':'Panama',
							'value':'Panama'
						},
						{
							'name':'Papua New Guinea',
							'value':'Papua New Guinea'
						},
						{
							'name':'Paraguay',
							'value':'Paraguay'
						},
						{
							'name':'Peru',
							'value':'Peru'
						},
						{
							'name':'Philippines',
							'value':'Philippines'
						},
						{
							'name':'Pitcairn',
							'value':'Pitcairn'
						},
						{
							'name':'Poland',
							'value':'Poland'
						},
						{
							'name':'Portugal',
							'value':'Portugal'
						},
						{
							'name':'Puerto Rico',
							'value':'Puerto Rico'
						},
						{
							'name':'Qatar',
							'value':'Qatar'
						},
						{
							'name':'Reunion',
							'value':'Reunion'
						},
						{
							'name':'Romania',
							'value':'Romania'
						},
						{
							'name':'Russian Federation',
							'value':'Russian Federation'
						},
						{
							'name':'Rwanda',
							'value':'Rwanda'
						},
						{
							'name':'Saint Helena',
							'value':'Saint Helena'
						},
						{
							'name':'Saint Kitts And Nevis',
							'value':'Saint Kitts And Nevis'
						},
						{
							'name':'Saint Lucia',
							'value':'Saint Lucia'
						},
						{
							'name':'Saint Pierre And Miquelon',
							'value':'Saint Pierre And Miquelon'
						},
						{
							'name':'Saint Vincent And The Grenadines',
							'value':'Saint Vincent And The Grenadines'
						},
						{
							'name':'Samoa',
							'value':'Samoa'
						},
						{
							'name':'San Marino',
							'value':'San Marino'
						},
						{
							'name':'Sao Tome And Principe',
							'value':'Sao Tome And Principe'
						},
						{
							'name':'Saudi Arabia',
							'value':'Saudi Arabia'
						},
						{
							'name':'Senegal',
							'value':'Senegal'
						},
						{
							'name':'Serbia',
							'value':'Serbia'
						},
						{
							'name':'Seychelles',
							'value':'Seychelles'
						},
						{
							'name':'Sierra Leone',
							'value':'Sierra Leone'
						},
						{
							'name':'Singapore',
							'value':'Singapore'
						},
						{
							'name':'Slovakia',
							'value':'Slovakia'
						},
						{
							'name':'Slovenia',
							'value':'Slovenia'
						},
						{
							'name':'Solomon Islands',
							'value':'Solomon Islands'
						},
						{
							'name':'Somalia',
							'value':'Somalia'
						},
						{
							'name':'South Africa',
							'value':'South Africa'
						},
						{
							'name':'South Georgia And The South Sandwich Islands',
							'value':'South Georgia And The South Sandwich Islands'
						},
						{
							'name':'Spain',
							'value':'Spain'
						},
						{
							'name':'Sri Lanka',
							'value':'Sri Lanka'
						},
						{
							'name':'Sudan',
							'value':'Sudan'
						},
						{
							'name':'Suriname',
							'value':'Suriname'
						},
						{
							'name':'Svalbard And Jan Mayen',
							'value':'Svalbard And Jan Mayen'
						},
						{
							'name':'Swaziland',
							'value':'Swaziland'
						},
						{
							'name':'Sweden',
							'value':'Sweden'
						},
						{
							'name':'Switzerland',
							'value':'Switzerland'
						},
						{
							'name':'Syrian Arab Republic',
							'value':'Syrian Arab Republic'
						},
						{
							'name':'Taiwan, Province Of China',
							'value':'Taiwan, Province Of China'
						},
						{
							'name':'Tajikistan',
							'value':'Tajikistan'
						},
						{
							'name':'Tanzania, United Republic Of',
							'value':'Tanzania, United Republic Of'
						},
						{
							'name':'Thailand',
							'value':'Thailand'
						},
						{
							'name':'Togo',
							'value':'Togo'
						},
						{
							'name':'Tokelau',
							'value':'Tokelau'
						},
						{
							'name':'Tonga',
							'value':'Tonga'
						},
						{
							'name':'Trinidad And Tobago',
							'value':'Trinidad And Tobago'
						},
						{
							'name':'Tunisia',
							'value':'Tunisia'
						},
						{
							'name':'Turkey',
							'value':'Turkey'
						},
						{
							'name':'Turkmenistan',
							'value':'Turkmenistan'
						},
						{
							'name':'Turks And Caicos Islands',
							'value':'Turks And Caicos Islands'
						},
						{
							'name':'Tuvalu',
							'value':'Tuvalu'
						},
						{
							'name':'Uganda',
							'value':'Uganda'
						},
						{
							'name':'Ukraine',
							'value':'Ukraine'
						},
						{
							'name':'United Arab Emirates',
							'value':'United Arab Emirates'
						},
						{
							'name':'United Kingdom',
							'value':'United Kingdom'
						},
						{
							'name':'United States',
							'value':'United States'
						},
						{
							'name':'United States Minor Outlying Islands',
							'value':'United States Minor Outlying Islands'
						},
						{
							'name':'Uruguay',
							'value':'Uruguay'
						},
						{
							'name':'Uzbekistan',
							'value':'Uzbekistan'
						},
						{
							'name':'Vanuatu',
							'value':'Vanuatu'
						},
						{
							'name':'Venezuela',
							'value':'Venezuela'
						},
						{
							'name':'Viet Nam',
							'value':'Viet Nam'
						},
						{
							'name':'Virgin Islands, British',
							'value':'Virgin Islands, British'
						},
						{
							'name':'Virgin Islands, U.s.',
							'value':'Virgin Islands, U.s.'
						},
						{
							'name':'Wallis And Futuna',
							'value':'Wallis And Futuna'
						},
						{
							'name':'Western Sahara',
							'value':'Western Sahara'
						},
						{
							'name':'Yemen',
							'value':'Yemen'
						},
						{
							'name':'Zambia',
							'value':'Zambia'
						},
						{
							'name':'Zimbabwe',
							'value':'Zimbabwe'
						}
					]
				}
			]
		},
		{
			'k':'get-company-by-phone',
			'd':'Get Company By Phone',
			'ed':'Get company data by phone number',
			'g':'company',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'34933197570'
				}
			]
		},
		{
			'k':'get-company-by-profile',
			'd':'Get Company By Social Profile',
			'ed':'Get company data by social network uri (LinkedIn, Twitter, ...)',
			'g':'company',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://twitter.com/Cloudflare'
				}
			]
		},
		{
			'k':'get-person-by-profile',
			'd':'Get Person By Social Profile',
			'ed':'Get personal data by social network profile',
			'g':'personal',
			'p': [
				{
					'n':'profile',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/in/miquelcolomersalas'
				}
			]
		},
		{
			'k':'get-role-classified',
			'd':'Get Classified Role',
			'ed':'Identify and classify a prospect role detecting the right area and seniority to filter later',
			'g':'company',
			'p': [
				{
					'n':'role',
					'r': true,
					't':'string',
					'p':'Project Manager'
				}
			]
		},
		{
			'k':'check-company-debtor-by-taxid',
			'd':'Check Company Is Debtor By TaxId (ES)',
			'ed':'Check if company is debtor by TaxId',
			'g':'company',
			'p': [
				{
					'n':'taxid',
					'r': true,
					't':'string',
					'p':'B04363115'
				}
			]
		},
		{
			'k':'get-person-decision-maker',
			'd':'Get Decision Maker',
			'ed':'Get professional data of a decision maker by company name/domain and area',
			'g':'company',
			'p': [
				{
					'n':'company',
					'r': true,
					't':'string',
					'p':'uproc.io'
				},
				{
					'n':'area',
					'r': false,
					't':'options',
					'p':'',
					'o': [
						{
							'name':'Communications',
							'value':'Communications'
						},
						{
							'name':'Consulting',
							'value':'Consulting'
						},
						{
							'name':'Customer service',
							'value':'Customer service'
						},
						{
							'name':'Education',
							'value':'Education'
						},
						{
							'name':'Engineering',
							'value':'Engineering'
						},
						{
							'name':'Finance',
							'value':'Finance'
						},
						{
							'name':'Health professional',
							'value':'Health professional'
						},
						{
							'name':'Human resources',
							'value':'Human resources'
						},
						{
							'name':'Information technology',
							'value':'Information technology'
						},
						{
							'name':'Legal',
							'value':'Legal'
						},
						{
							'name':'Marketing',
							'value':'Marketing'
						},
						{
							'name':'Operations',
							'value':'Operations'
						},
						{
							'name':'Owner',
							'value':'Owner'
						},
						{
							'name':'President',
							'value':'President'
						},
						{
							'name':'Product',
							'value':'Product'
						},
						{
							'name':'Public relations',
							'value':'Public relations'
						},
						{
							'name':'Real estate',
							'value':'Real estate'
						},
						{
							'name':'Recruiting',
							'value':'Recruiting'
						},
						{
							'name':'Research',
							'value':'Research'
						},
						{
							'name':'Sales',
							'value':'Sales'
						}
					]
				}
			]
		},
		{
			'k':'get-person-decision-maker-by-search',
			'd':'Get Decision Maker By Search Engine',
			'ed':'Discover the more suitable decision maker using search engines (Bing) by company name and area (optional)',
			'g':'company',
			'p': [
				{
					'n':'company',
					'r': true,
					't':'string',
					'p':'oracle'
				},
				{
					'n':'area',
					'r': false,
					't':'options',
					'p':'',
					'o': [
						{
							'name':'Communications',
							'value':'Communications'
						},
						{
							'name':'Consulting',
							'value':'Consulting'
						},
						{
							'name':'Customer service',
							'value':'Customer service'
						},
						{
							'name':'Ecommerce',
							'value':'Ecommerce'
						},
						{
							'name':'Education',
							'value':'Education'
						},
						{
							'name':'Engineering',
							'value':'Engineering'
						},
						{
							'name':'Finance',
							'value':'Finance'
						},
						{
							'name':'Health professional',
							'value':'Health professional'
						},
						{
							'name':'Human resources',
							'value':'Human resources'
						},
						{
							'name':'Information technology',
							'value':'Information technology'
						},
						{
							'name':'Legal',
							'value':'Legal'
						},
						{
							'name':'Marketing',
							'value':'Marketing'
						},
						{
							'name':'Operations',
							'value':'Operations'
						},
						{
							'name':'Owner',
							'value':'Owner'
						},
						{
							'name':'President',
							'value':'President'
						},
						{
							'name':'Product',
							'value':'Product'
						},
						{
							'name':'Public relations',
							'value':'Public relations'
						},
						{
							'name':'Real estate',
							'value':'Real estate'
						},
						{
							'name':'Recruiting',
							'value':'Recruiting'
						},
						{
							'name':'Research',
							'value':'Research'
						},
						{
							'name':'Sales',
							'value':'Sales'
						}
					]
				}
			]
		},
		{
			'k':'get-company-domain-by-name',
			'd':'Get Domain By Company Name',
			'ed':'Get company domain by company name',
			'g':'company',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Cyberclick'
				}
			]
		},
		{
			'k':'get-person-emails-by-domain-and-area',
			'd':`Get Decision Maker's Emails By Domain And Area`,
			'ed':'Get professional emails of decision makers (by priority: executive, manager and directors) by company domain and area',
			'g':'company',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'oracle.com'
				},
				{
					'n':'area',
					'r': true,
					't':'options',
					'p':'Marketing',
					'o': [
						{
							'name':'Communications',
							'value':'Communications'
						},
						{
							'name':'Consulting',
							'value':'Consulting'
						},
						{
							'name':'Customer service',
							'value':'Customer service'
						},
						{
							'name':'Education',
							'value':'Education'
						},
						{
							'name':'Engineering',
							'value':'Engineering'
						},
						{
							'name':'Finance',
							'value':'Finance'
						},
						{
							'name':'Health professional',
							'value':'Health professional'
						},
						{
							'name':'Human resources',
							'value':'Human resources'
						},
						{
							'name':'Information technology',
							'value':'Information technology'
						},
						{
							'name':'Legal',
							'value':'Legal'
						},
						{
							'name':'Marketing',
							'value':'Marketing'
						},
						{
							'name':'Operations',
							'value':'Operations'
						},
						{
							'name':'Owner',
							'value':'Owner'
						},
						{
							'name':'President',
							'value':'President'
						},
						{
							'name':'Product',
							'value':'Product'
						},
						{
							'name':'Public relations',
							'value':'Public relations'
						},
						{
							'name':'Real estate',
							'value':'Real estate'
						},
						{
							'name':'Recruiting',
							'value':'Recruiting'
						},
						{
							'name':'Research',
							'value':'Research'
						},
						{
							'name':'Sales',
							'value':'Sales'
						}
					]
				}
			]
		},
		{
			'k':'get-company-extended-by-domain',
			'd':'Get Company (Extended) By Domain',
			'ed':'Get company contact, social and technology data by domain',
			'g':'company',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'killia.com'
				}
			]
		},
		{
			'k':'get-company-extended-by-email',
			'd':'Get Company (Extended) By Email',
			'ed':'Get company contact, social and technology data by email',
			'g':'company',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'hello@killia.com'
				}
			]
		},
		{
			'k':'get-person-extended-by-profile',
			'd':'Get Person (Extended) By Profile',
			'ed':'Get personal and social data by social profile',
			'g':'personal',
			'p': [
				{
					'n':'profile',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/in/miquelcolomersalas'
				}
			]
		},
		{
			'k':'get-profile-facebook-by-company',
			'd':'Get Facebook URI By Company',
			'ed':'Get Facebook company profile by name without manual search on Google or Facebook.<br><br>This tool uses search engines (Bing and Google) through proxies',
			'g':'company',
			'p': [
				{
					'n':'company',
					'r': true,
					't':'string',
					'p':'Cyberclick'
				}
			]
		},
		{
			'k':'get-company-financial-by-domain',
			'd':`Get Sales Data By Company's Domain`,
			'ed':`Get company sales data by company's domain name.<br><br>Next countries are supported: Spain`,
			'g':'company',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'cyberclick.es'
				}
			]
		},
		{
			'k':'get-company-financial-by-duns',
			'd':`Get Sales Data By Company's DUNS`,
			'ed':`Get company sales data by company's DUNS number.<br><br>Next countries are supported: Spain`,
			'g':'company',
			'p': [
				{
					'n':'duns',
					'r': true,
					't':'string',
					'p':'461809423'
				}
			]
		},
		{
			'k':'get-company-financial-by-name',
			'd':`Get Sales Data By Company's Name`,
			'ed':`Get company sales data by company's name.<br><br>Next countries are supported: Spain`,
			'g':'company',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Cyberclick S.L.'
				}
			]
		},
		{
			'k':'get-company-financial-by-taxid',
			'd':`Get Sales Data By Company's Taxid`,
			'ed':`Get company sales data by company's taxid (CIF).<br><br>Next countries are supported: Spain`,
			'g':'company',
			'p': [
				{
					'n':'taxid',
					'r': true,
					't':'string',
					'p':'B62084959'
				}
			]
		},
		{
			'k':'get-company-geocoded-by-ip',
			'd':'Get Geocoded Company By IP',
			'ed':'Get geocoded company data by IP address',
			'g':'company',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'74.125.228.72'
				}
			]
		},
		{
			'k':'send-linkedin-invitation',
			'd':'Send Connection Request To Linkedin Profile',
			'ed':'Send a custom message invitation to a non connected Linkedin profile (supported uris: https://www.linkedin.com/in/USERID)',
			'g':'communication',
			'p': [
				{
					'n':'profile',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/in/miquelcolomersalas'
				},
				{
					'n':'message',
					'r': true,
					't':'string',
					'p':'Hi {{first}}, would you like to be part of my network! Thanks'
				}
			]
		},
		{
			'k':'send-linkedin-invitation-or-message',
			'd':'Send Invitation Or Message To Linkedin Profile',
			'ed':'Send a custom invitation message if profile is connecte or a custom message otherwise (supported uris: https://www.linkedin.com/in/USERID)',
			'g':'communication',
			'p': [
				{
					'n':'profile',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/in/miquelcolomersalas'
				},
				{
					'n':'message',
					'r': true,
					't':'string',
					'p':'Hi {{first}}, would you like to be part of my network? Thanks'
				}
			]
		},
		{
			'k':'get-profile-linkedin-by-company',
			'd':'Get LinkedIn URI By Company',
			'ed':'Get LinkedIn company profile by name without manual search on Google or LinkedIn.<br><br>This tool uses search engines (Bing and Google) through proxies',
			'g':'company',
			'p': [
				{
					'n':'company',
					'r': true,
					't':'string',
					'p':'Cyberclick'
				}
			]
		},
		{
			'k':'get-person-list-by-params',
			'd':'Get Employees By Parameters',
			'ed':'Get employees by company name or domain, area, seniority and country',
			'g':'company',
			'p': [
				{
					'n':'country',
					'r': true,
					't':'options',
					'p':'Spain',
					'o': [
						{
							'name':'Afghanistan',
							'value':'Afghanistan'
						},
						{
							'name':'Albania',
							'value':'Albania'
						},
						{
							'name':'Algeria',
							'value':'Algeria'
						},
						{
							'name':'American Samoa',
							'value':'American Samoa'
						},
						{
							'name':'Andorra',
							'value':'Andorra'
						},
						{
							'name':'Angola',
							'value':'Angola'
						},
						{
							'name':'Anguilla',
							'value':'Anguilla'
						},
						{
							'name':'Antarctica',
							'value':'Antarctica'
						},
						{
							'name':'Antigua And Barbuda',
							'value':'Antigua And Barbuda'
						},
						{
							'name':'Argentina',
							'value':'Argentina'
						},
						{
							'name':'Armenia',
							'value':'Armenia'
						},
						{
							'name':'Aruba',
							'value':'Aruba'
						},
						{
							'name':'Australia',
							'value':'Australia'
						},
						{
							'name':'Austria',
							'value':'Austria'
						},
						{
							'name':'Azerbaijan',
							'value':'Azerbaijan'
						},
						{
							'name':'Bahamas',
							'value':'Bahamas'
						},
						{
							'name':'Bahrain',
							'value':'Bahrain'
						},
						{
							'name':'Bangladesh',
							'value':'Bangladesh'
						},
						{
							'name':'Barbados',
							'value':'Barbados'
						},
						{
							'name':'Belarus',
							'value':'Belarus'
						},
						{
							'name':'Belgium',
							'value':'Belgium'
						},
						{
							'name':'Belize',
							'value':'Belize'
						},
						{
							'name':'Benin',
							'value':'Benin'
						},
						{
							'name':'Bermuda',
							'value':'Bermuda'
						},
						{
							'name':'Bhutan',
							'value':'Bhutan'
						},
						{
							'name':'Bolivia',
							'value':'Bolivia'
						},
						{
							'name':'Bosnia And Herzegovina',
							'value':'Bosnia And Herzegovina'
						},
						{
							'name':'Botswana',
							'value':'Botswana'
						},
						{
							'name':'Bouvet Island',
							'value':'Bouvet Island'
						},
						{
							'name':'Brazil',
							'value':'Brazil'
						},
						{
							'name':'British Indian Ocean Territory',
							'value':'British Indian Ocean Territory'
						},
						{
							'name':'Brunei Darussalam',
							'value':'Brunei Darussalam'
						},
						{
							'name':'Bulgaria',
							'value':'Bulgaria'
						},
						{
							'name':'Burkina Faso',
							'value':'Burkina Faso'
						},
						{
							'name':'Burundi',
							'value':'Burundi'
						},
						{
							'name':'Cambodia',
							'value':'Cambodia'
						},
						{
							'name':'Cameroon',
							'value':'Cameroon'
						},
						{
							'name':'Canada',
							'value':'Canada'
						},
						{
							'name':'Cape Verde',
							'value':'Cape Verde'
						},
						{
							'name':'Cayman Islands',
							'value':'Cayman Islands'
						},
						{
							'name':'Central African Republic',
							'value':'Central African Republic'
						},
						{
							'name':'Chad',
							'value':'Chad'
						},
						{
							'name':'Chile',
							'value':'Chile'
						},
						{
							'name':'China',
							'value':'China'
						},
						{
							'name':'Christmas Island',
							'value':'Christmas Island'
						},
						{
							'name':'Cocos (keeling) Islands',
							'value':'Cocos (keeling) Islands'
						},
						{
							'name':'Colombia',
							'value':'Colombia'
						},
						{
							'name':'Comoros',
							'value':'Comoros'
						},
						{
							'name':'Congo',
							'value':'Congo'
						},
						{
							'name':'Congo, The Democratic Republic Of The',
							'value':'Congo, The Democratic Republic Of The'
						},
						{
							'name':'Cook Islands',
							'value':'Cook Islands'
						},
						{
							'name':'Costa Rica',
							'value':'Costa Rica'
						},
						{
							'name':`Cote D'ivoire`,
							'value':`Cote D'ivoire`
						},
						{
							'name':'Croatia',
							'value':'Croatia'
						},
						{
							'name':'Cuba',
							'value':'Cuba'
						},
						{
							'name':'Cyprus',
							'value':'Cyprus'
						},
						{
							'name':'Czech Republic',
							'value':'Czech Republic'
						},
						{
							'name':'Denmark',
							'value':'Denmark'
						},
						{
							'name':'Djibouti',
							'value':'Djibouti'
						},
						{
							'name':'Dominica',
							'value':'Dominica'
						},
						{
							'name':'Dominican Republic',
							'value':'Dominican Republic'
						},
						{
							'name':'East Timor',
							'value':'East Timor'
						},
						{
							'name':'Ecuador',
							'value':'Ecuador'
						},
						{
							'name':'Egypt',
							'value':'Egypt'
						},
						{
							'name':'El Salvador',
							'value':'El Salvador'
						},
						{
							'name':'Equatorial Guinea',
							'value':'Equatorial Guinea'
						},
						{
							'name':'Eritrea',
							'value':'Eritrea'
						},
						{
							'name':'Estonia',
							'value':'Estonia'
						},
						{
							'name':'Ethiopia',
							'value':'Ethiopia'
						},
						{
							'name':'Falkland Islands (malvinas)',
							'value':'Falkland Islands (malvinas)'
						},
						{
							'name':'Faroe Islands',
							'value':'Faroe Islands'
						},
						{
							'name':'Fiji',
							'value':'Fiji'
						},
						{
							'name':'Finland',
							'value':'Finland'
						},
						{
							'name':'France',
							'value':'France'
						},
						{
							'name':'French Guiana',
							'value':'French Guiana'
						},
						{
							'name':'French Polynesia',
							'value':'French Polynesia'
						},
						{
							'name':'French Southern Territories',
							'value':'French Southern Territories'
						},
						{
							'name':'Gabon',
							'value':'Gabon'
						},
						{
							'name':'Gambia',
							'value':'Gambia'
						},
						{
							'name':'Georgia',
							'value':'Georgia'
						},
						{
							'name':'Germany',
							'value':'Germany'
						},
						{
							'name':'Ghana',
							'value':'Ghana'
						},
						{
							'name':'Gibraltar',
							'value':'Gibraltar'
						},
						{
							'name':'Greece',
							'value':'Greece'
						},
						{
							'name':'Greenland',
							'value':'Greenland'
						},
						{
							'name':'Grenada',
							'value':'Grenada'
						},
						{
							'name':'Guadeloupe',
							'value':'Guadeloupe'
						},
						{
							'name':'Guam',
							'value':'Guam'
						},
						{
							'name':'Guatemala',
							'value':'Guatemala'
						},
						{
							'name':'Guinea',
							'value':'Guinea'
						},
						{
							'name':'Guinea-bissau',
							'value':'Guinea-bissau'
						},
						{
							'name':'Guyana',
							'value':'Guyana'
						},
						{
							'name':'Haiti',
							'value':'Haiti'
						},
						{
							'name':'Heard Island And Mcdonald Islands',
							'value':'Heard Island And Mcdonald Islands'
						},
						{
							'name':'Holy See (vatican City State)',
							'value':'Holy See (vatican City State)'
						},
						{
							'name':'Honduras',
							'value':'Honduras'
						},
						{
							'name':'Hong Kong',
							'value':'Hong Kong'
						},
						{
							'name':'Hungary',
							'value':'Hungary'
						},
						{
							'name':'Iceland',
							'value':'Iceland'
						},
						{
							'name':'India',
							'value':'India'
						},
						{
							'name':'Indonesia',
							'value':'Indonesia'
						},
						{
							'name':'Iran, Islamic Republic Of',
							'value':'Iran, Islamic Republic Of'
						},
						{
							'name':'Iraq',
							'value':'Iraq'
						},
						{
							'name':'Ireland',
							'value':'Ireland'
						},
						{
							'name':'Israel',
							'value':'Israel'
						},
						{
							'name':'Italy',
							'value':'Italy'
						},
						{
							'name':'Jamaica',
							'value':'Jamaica'
						},
						{
							'name':'Japan',
							'value':'Japan'
						},
						{
							'name':'Jordan',
							'value':'Jordan'
						},
						{
							'name':'Kazakstan',
							'value':'Kazakstan'
						},
						{
							'name':'Kenya',
							'value':'Kenya'
						},
						{
							'name':'Kiribati',
							'value':'Kiribati'
						},
						{
							'name':`Korea, Democratic People's Republic Of`,
							'value':`Korea, Democratic People's Republic Of`,
						},
						{
							'name':'Korea, Republic Of',
							'value':'Korea, Republic Of'
						},
						{
							'name':'Kosovo',
							'value':'Kosovo'
						},
						{
							'name':'Kuwait',
							'value':'Kuwait'
						},
						{
							'name':'Kyrgyzstan',
							'value':'Kyrgyzstan'
						},
						{
							'name':`Lao People's Democratic Republic`,
							'value':`Lao People's Democratic Republic`,
						},
						{
							'name':'Latvia',
							'value':'Latvia'
						},
						{
							'name':'Lebanon',
							'value':'Lebanon'
						},
						{
							'name':'Lesotho',
							'value':'Lesotho'
						},
						{
							'name':'Liberia',
							'value':'Liberia'
						},
						{
							'name':'Libyan Arab Jamahiriya',
							'value':'Libyan Arab Jamahiriya'
						},
						{
							'name':'Liechtenstein',
							'value':'Liechtenstein'
						},
						{
							'name':'Lithuania',
							'value':'Lithuania'
						},
						{
							'name':'Luxembourg',
							'value':'Luxembourg'
						},
						{
							'name':'Macau',
							'value':'Macau'
						},
						{
							'name':'Macedonia, The Former Yugoslav Republic Of',
							'value':'Macedonia, The Former Yugoslav Republic Of'
						},
						{
							'name':'Madagascar',
							'value':'Madagascar'
						},
						{
							'name':'Malawi',
							'value':'Malawi'
						},
						{
							'name':'Malaysia',
							'value':'Malaysia'
						},
						{
							'name':'Maldives',
							'value':'Maldives'
						},
						{
							'name':'Mali',
							'value':'Mali'
						},
						{
							'name':'Malta',
							'value':'Malta'
						},
						{
							'name':'Marshall Islands',
							'value':'Marshall Islands'
						},
						{
							'name':'Martinique',
							'value':'Martinique'
						},
						{
							'name':'Mauritania',
							'value':'Mauritania'
						},
						{
							'name':'Mauritius',
							'value':'Mauritius'
						},
						{
							'name':'Mayotte',
							'value':'Mayotte'
						},
						{
							'name':'Mexico',
							'value':'Mexico'
						},
						{
							'name':'Micronesia, Federated States Of',
							'value':'Micronesia, Federated States Of'
						},
						{
							'name':'Moldova, Republic Of',
							'value':'Moldova, Republic Of'
						},
						{
							'name':'Monaco',
							'value':'Monaco'
						},
						{
							'name':'Mongolia',
							'value':'Mongolia'
						},
						{
							'name':'Montenegro',
							'value':'Montenegro'
						},
						{
							'name':'Montserrat',
							'value':'Montserrat'
						},
						{
							'name':'Morocco',
							'value':'Morocco'
						},
						{
							'name':'Mozambique',
							'value':'Mozambique'
						},
						{
							'name':'Myanmar',
							'value':'Myanmar'
						},
						{
							'name':'Namibia',
							'value':'Namibia'
						},
						{
							'name':'Nauru',
							'value':'Nauru'
						},
						{
							'name':'Nepal',
							'value':'Nepal'
						},
						{
							'name':'Netherlands',
							'value':'Netherlands'
						},
						{
							'name':'Netherlands Antilles',
							'value':'Netherlands Antilles'
						},
						{
							'name':'New Caledonia',
							'value':'New Caledonia'
						},
						{
							'name':'New Zealand',
							'value':'New Zealand'
						},
						{
							'name':'Nicaragua',
							'value':'Nicaragua'
						},
						{
							'name':'Niger',
							'value':'Niger'
						},
						{
							'name':'Nigeria',
							'value':'Nigeria'
						},
						{
							'name':'Niue',
							'value':'Niue'
						},
						{
							'name':'Norfolk Island',
							'value':'Norfolk Island'
						},
						{
							'name':'Northern Mariana Islands',
							'value':'Northern Mariana Islands'
						},
						{
							'name':'Norway',
							'value':'Norway'
						},
						{
							'name':'Oman',
							'value':'Oman'
						},
						{
							'name':'Pakistan',
							'value':'Pakistan'
						},
						{
							'name':'Palau',
							'value':'Palau'
						},
						{
							'name':'Palestinian Territory, Occupied',
							'value':'Palestinian Territory, Occupied'
						},
						{
							'name':'Panama',
							'value':'Panama'
						},
						{
							'name':'Papua New Guinea',
							'value':'Papua New Guinea'
						},
						{
							'name':'Paraguay',
							'value':'Paraguay'
						},
						{
							'name':'Peru',
							'value':'Peru'
						},
						{
							'name':'Philippines',
							'value':'Philippines'
						},
						{
							'name':'Pitcairn',
							'value':'Pitcairn'
						},
						{
							'name':'Poland',
							'value':'Poland'
						},
						{
							'name':'Portugal',
							'value':'Portugal'
						},
						{
							'name':'Puerto Rico',
							'value':'Puerto Rico'
						},
						{
							'name':'Qatar',
							'value':'Qatar'
						},
						{
							'name':'Reunion',
							'value':'Reunion'
						},
						{
							'name':'Romania',
							'value':'Romania'
						},
						{
							'name':'Russian Federation',
							'value':'Russian Federation'
						},
						{
							'name':'Rwanda',
							'value':'Rwanda'
						},
						{
							'name':'Saint Helena',
							'value':'Saint Helena'
						},
						{
							'name':'Saint Kitts And Nevis',
							'value':'Saint Kitts And Nevis'
						},
						{
							'name':'Saint Lucia',
							'value':'Saint Lucia'
						},
						{
							'name':'Saint Pierre And Miquelon',
							'value':'Saint Pierre And Miquelon'
						},
						{
							'name':'Saint Vincent And The Grenadines',
							'value':'Saint Vincent And The Grenadines'
						},
						{
							'name':'Samoa',
							'value':'Samoa'
						},
						{
							'name':'San Marino',
							'value':'San Marino'
						},
						{
							'name':'Sao Tome And Principe',
							'value':'Sao Tome And Principe'
						},
						{
							'name':'Saudi Arabia',
							'value':'Saudi Arabia'
						},
						{
							'name':'Senegal',
							'value':'Senegal'
						},
						{
							'name':'Serbia',
							'value':'Serbia'
						},
						{
							'name':'Seychelles',
							'value':'Seychelles'
						},
						{
							'name':'Sierra Leone',
							'value':'Sierra Leone'
						},
						{
							'name':'Singapore',
							'value':'Singapore'
						},
						{
							'name':'Slovakia',
							'value':'Slovakia'
						},
						{
							'name':'Slovenia',
							'value':'Slovenia'
						},
						{
							'name':'Solomon Islands',
							'value':'Solomon Islands'
						},
						{
							'name':'Somalia',
							'value':'Somalia'
						},
						{
							'name':'South Africa',
							'value':'South Africa'
						},
						{
							'name':'South Georgia And The South Sandwich Islands',
							'value':'South Georgia And The South Sandwich Islands'
						},
						{
							'name':'Spain',
							'value':'Spain'
						},
						{
							'name':'Sri Lanka',
							'value':'Sri Lanka'
						},
						{
							'name':'Sudan',
							'value':'Sudan'
						},
						{
							'name':'Suriname',
							'value':'Suriname'
						},
						{
							'name':'Svalbard And Jan Mayen',
							'value':'Svalbard And Jan Mayen'
						},
						{
							'name':'Swaziland',
							'value':'Swaziland'
						},
						{
							'name':'Sweden',
							'value':'Sweden'
						},
						{
							'name':'Switzerland',
							'value':'Switzerland'
						},
						{
							'name':'Syrian Arab Republic',
							'value':'Syrian Arab Republic'
						},
						{
							'name':'Taiwan, Province Of China',
							'value':'Taiwan, Province Of China'
						},
						{
							'name':'Tajikistan',
							'value':'Tajikistan'
						},
						{
							'name':'Tanzania, United Republic Of',
							'value':'Tanzania, United Republic Of'
						},
						{
							'name':'Thailand',
							'value':'Thailand'
						},
						{
							'name':'Togo',
							'value':'Togo'
						},
						{
							'name':'Tokelau',
							'value':'Tokelau'
						},
						{
							'name':'Tonga',
							'value':'Tonga'
						},
						{
							'name':'Trinidad And Tobago',
							'value':'Trinidad And Tobago'
						},
						{
							'name':'Tunisia',
							'value':'Tunisia'
						},
						{
							'name':'Turkey',
							'value':'Turkey'
						},
						{
							'name':'Turkmenistan',
							'value':'Turkmenistan'
						},
						{
							'name':'Turks And Caicos Islands',
							'value':'Turks And Caicos Islands'
						},
						{
							'name':'Tuvalu',
							'value':'Tuvalu'
						},
						{
							'name':'Uganda',
							'value':'Uganda'
						},
						{
							'name':'Ukraine',
							'value':'Ukraine'
						},
						{
							'name':'United Arab Emirates',
							'value':'United Arab Emirates'
						},
						{
							'name':'United Kingdom',
							'value':'United Kingdom'
						},
						{
							'name':'United States',
							'value':'United States'
						},
						{
							'name':'United States Minor Outlying Islands',
							'value':'United States Minor Outlying Islands'
						},
						{
							'name':'Uruguay',
							'value':'Uruguay'
						},
						{
							'name':'Uzbekistan',
							'value':'Uzbekistan'
						},
						{
							'name':'Vanuatu',
							'value':'Vanuatu'
						},
						{
							'name':'Venezuela',
							'value':'Venezuela'
						},
						{
							'name':'Viet Nam',
							'value':'Viet Nam'
						},
						{
							'name':'Virgin Islands, British',
							'value':'Virgin Islands, British'
						},
						{
							'name':'Virgin Islands, U.s.',
							'value':'Virgin Islands, U.s.'
						},
						{
							'name':'Wallis And Futuna',
							'value':'Wallis And Futuna'
						},
						{
							'name':'Western Sahara',
							'value':'Western Sahara'
						},
						{
							'name':'Yemen',
							'value':'Yemen'
						},
						{
							'name':'Zambia',
							'value':'Zambia'
						},
						{
							'name':'Zimbabwe',
							'value':'Zimbabwe'
						}
					]
				},
				{
					'n':'company',
					'r': false,
					't':'string',
					'p':'oracle'
				},
				{
					'n':'area',
					'r': false,
					't':'options',
					'p':'',
					'o': [
						{
							'name':'Communications',
							'value':'Communications'
						},
						{
							'name':'Consulting',
							'value':'Consulting'
						},
						{
							'name':'Customer service',
							'value':'Customer service'
						},
						{
							'name':'Education',
							'value':'Education'
						},
						{
							'name':'Engineering',
							'value':'Engineering'
						},
						{
							'name':'Finance',
							'value':'Finance'
						},
						{
							'name':'Health professional',
							'value':'Health professional'
						},
						{
							'name':'Human resources',
							'value':'Human resources'
						},
						{
							'name':'Information technology',
							'value':'Information technology'
						},
						{
							'name':'Legal',
							'value':'Legal'
						},
						{
							'name':'Marketing',
							'value':'Marketing'
						},
						{
							'name':'Operations',
							'value':'Operations'
						},
						{
							'name':'Owner',
							'value':'Owner'
						},
						{
							'name':'President',
							'value':'President'
						},
						{
							'name':'Product',
							'value':'Product'
						},
						{
							'name':'Public relations',
							'value':'Public relations'
						},
						{
							'name':'Real estate',
							'value':'Real estate'
						},
						{
							'name':'Recruiting',
							'value':'Recruiting'
						},
						{
							'name':'Research',
							'value':'Research'
						},
						{
							'name':'Sales',
							'value':'Sales'
						}
					]
				},
				{
					'n':'seniority',
					'r': false,
					't':'options',
					'p':'',
					'o': [
						{
							'name':'Apprentice',
							'value':'Apprentice'
						},
						{
							'name':'Director',
							'value':'Director'
						},
						{
							'name':'Executive',
							'value':'Executive'
						},
						{
							'name':'Intermediate',
							'value':'Intermediate'
						},
						{
							'name':'Manager',
							'value':'Manager'
						}
					]
				},
				{
					'n':'email',
					'r': false,
					't':'options',
					'p':'',
					'o': [
						{
							'name':'No',
							'value':'No'
						},
						{
							'name':'Yes',
							'value':'Yes'
						}
					]
				},
				{
					'n':'phone',
					'r': false,
					't':'options',
					'p':'',
					'o': [
						{
							'name':'No',
							'value':'No'
						},
						{
							'name':'Yes',
							'value':'Yes'
						}
					]
				}
			]
		},
		{
			'k':'send-linkedin-message',
			'd':'Send Message To Linkedin Profile',
			'ed':'Send a custom private message to a connected Linkedin profile (supported uris: https://www.linkedin.com/in/USERID)',
			'g':'communication',
			'p': [
				{
					'n':'profile',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/in/miquelcolomersalas'
				},
				{
					'n':'message',
					'r': true,
					't':'string',
					'p':'Hi {{first}}, would you like to be part of my network? Thanks'
				}
			]
		},
		{
			'k':'get-person-multiple-decision-maker-by-search',
			'd':'Get Decision Makers By Search Engine',
			'ed':'Discover up to ten decision makers using search engines (Bing) by company name and area (optional)',
			'g':'company',
			'p': [
				{
					'n':'company',
					'r': true,
					't':'string',
					'p':'oracle'
				},
				{
					'n':'area',
					'r': false,
					't':'options',
					'p':'',
					'o': [
						{
							'name':'Communications',
							'value':'Communications'
						},
						{
							'name':'Consulting',
							'value':'Consulting'
						},
						{
							'name':'Customer service',
							'value':'Customer service'
						},
						{
							'name':'Ecommerce',
							'value':'Ecommerce'
						},
						{
							'name':'Education',
							'value':'Education'
						},
						{
							'name':'Engineering',
							'value':'Engineering'
						},
						{
							'name':'Finance',
							'value':'Finance'
						},
						{
							'name':'Health professional',
							'value':'Health professional'
						},
						{
							'name':'Human resources',
							'value':'Human resources'
						},
						{
							'name':'Information technology',
							'value':'Information technology'
						},
						{
							'name':'Legal',
							'value':'Legal'
						},
						{
							'name':'Marketing',
							'value':'Marketing'
						},
						{
							'name':'Operations',
							'value':'Operations'
						},
						{
							'name':'Owner',
							'value':'Owner'
						},
						{
							'name':'President',
							'value':'President'
						},
						{
							'name':'Product',
							'value':'Product'
						},
						{
							'name':'Public relations',
							'value':'Public relations'
						},
						{
							'name':'Real estate',
							'value':'Real estate'
						},
						{
							'name':'Recruiting',
							'value':'Recruiting'
						},
						{
							'name':'Research',
							'value':'Research'
						},
						{
							'name':'Sales',
							'value':'Sales'
						}
					]
				}
			]
		},
		{
			'k':'get-company-name-by-domain',
			'd':`Get Company's Name By Domain`,
			'ed':'Get company name by company domain',
			'g':'company',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'cyberclick.es'
				}
			]
		},
		{
			'k':'get-company-phone-by-domain',
			'd':'Get Phone By Company Domain',
			'ed':'Get company phone by company domain',
			'g':'company',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'cyberclick.es'
				}
			]
		},
		{
			'k':'get-profile-twitter-by-company',
			'd':'Get Twitter URI By Company',
			'ed':'Get Twitter company profile by name without manual search on Google or Twitter.<br><br>This tool uses search engines (Bing and Google) through proxies',
			'g':'company',
			'p': [
				{
					'n':'company',
					'r': true,
					't':'string',
					'p':'Cyberclick'
				}
			]
		},
		{
			'k':'get-distance-by-addresses',
			'd':'Get Distance Between Addresses',
			'ed':'Returns straight-line distance in kilometers between two addresses',
			'g':'geographic',
			'p': [
				{
					'n':'address1',
					'r': true,
					't':'string',
					'p':'Mallorca 120, 08036, Barcelona'
				},
				{
					'n':'address2',
					'r': true,
					't':'string',
					'p':'Mallorca 70, 08036, Barcelona'
				}
			]
		},
		{
			'k':'get-route-by-addresses',
			'd':'Get Route Between Addresses',
			'ed':'Returns driving routing time, distance, fuel consumption and cost between two addresses',
			'g':'geographic',
			'p': [
				{
					'n':'address1',
					'r': true,
					't':'string',
					'p':'Mallorca 120, 08036, Barcelona'
				},
				{
					'n':'address2',
					'r': true,
					't':'string',
					'p':'Mallorca 70, 08036, Barcelona'
				},
				{
					'n':'fuel_consumption',
					'r': true,
					't':'string',
					'p':'5'
				},
				{
					'n':'price_liter',
					'r': true,
					't':'string',
					'p':'1.2'
				}
			]
		},
		{
			'k':'get-distance-by-coordinates',
			'd':'Get Distance Between Coordinates',
			'ed':'Returns straight-line distance in kilometers between two GPS coordinates (latitude and longitude)',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates1',
					'r': true,
					't':'string',
					'p':'41.2522,-12.10'
				},
				{
					'n':'coordinates2',
					'r': true,
					't':'string',
					'p':'41.2522,-12.30'
				}
			]
		},
		{
			'k':'get-route-by-coordinates',
			'd':'Get Route Between Coordinates',
			'ed':'Returns driving routing time, distance, fuel consumption and cost between two GPS coordinates (latitude and longitude)',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates1',
					'r': true,
					't':'string',
					'p':'41.2522,-12.10'
				},
				{
					'n':'coordinates2',
					'r': true,
					't':'string',
					'p':'41.2522,-12.30'
				}
			]
		},
		{
			'k':'get-coordinate-by-ip',
			'd':'Get Coordinates By IP',
			'ed':'Discover latitude and longitude coordinates of an IP address',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-distance-by-ips',
			'd':'Get Distance Between IPs',
			'ed':'Returns straight-line distance in kilometers between two IP addresses',
			'g':'geographic',
			'p': [
				{
					'n':'ip1',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				},
				{
					'n':'ip2',
					'r': true,
					't':'string',
					'p':'88.190.16.36'
				}
			]
		},
		{
			'k':'get-route-by-ips',
			'd':'Get Route Between IPs',
			'ed':'Returns driving routing time, distance, fuel consumption and cost between two IP addresses',
			'g':'geographic',
			'p': [
				{
					'n':'ip1',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				},
				{
					'n':'ip2',
					'r': true,
					't':'string',
					'p':'88.190.16.36'
				},
				{
					'n':'fuel_consumption',
					'r': true,
					't':'string',
					'p':'5'
				},
				{
					'n':'price_liter',
					'r': true,
					't':'string',
					'p':'1.2'
				}
			]
		},
		{
			'k':'get-distance-by-phones',
			'd':'Get Distance Between Phones',
			'ed':'Returns straight-line distance in kilometers between two landline phones, using city and province of every phone',
			'g':'geographic',
			'p': [
				{
					'n':'phone1',
					'r': true,
					't':'string',
					'p':'932187670'
				},
				{
					'n':'phone2',
					'r': true,
					't':'string',
					'p':'91213111111'
				}
			]
		},
		{
			'k':'get-route-by-phones',
			'd':'Get Route Between Phones',
			'ed':'Returns driving routing time, distance, fuel consumption and cost between two landline phones, using city and province of every phone (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'phone1',
					'r': true,
					't':'string',
					'p':'932187670'
				},
				{
					'n':'phone2',
					'r': true,
					't':'string',
					'p':'91213111111'
				}
			]
		},
		{
			'k':'get-distance-by-zipcodes',
			'd':'Get Distance Between Zipcodes',
			'ed':'Returns straight-line distance in kilometers between two zipcodes, using city and province of every zipcode',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode1',
					'r': true,
					't':'string',
					'p':'08012'
				},
				{
					'n':'zipcode2',
					'r': true,
					't':'string',
					'p':'28080'
				}
			]
		},
		{
			'k':'get-route-by-zipcodes',
			'd':'Get Route Between Zipcodes',
			'ed':'Returns driving routing time, distance, fuel consumption and cost between two zipcodes, using city and province of every zipcode',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode1',
					'r': true,
					't':'string',
					'p':'08012'
				},
				{
					'n':'zipcode2',
					'r': true,
					't':'string',
					'p':'28080'
				}
			]
		},
		{
			'k':'get-coordinate-cartesian',
			'd':'Get Cartesian Coordinates',
			'ed':'Get Cartesian coordinates (X,Y,Z/WGS84) by Latitude and Longitude',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates',
					'r': true,
					't':'string',
					'p':'41.38879,2.15899'
				}
			]
		},
		{
			'k':'get-coordinate-decimal',
			'd':'Get Decimal Coordinates',
			'ed':'Get Decimal coordinates (degrees, minutes and seconds) by latitude and longitude',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates',
					'r': true,
					't':'string',
					'p':'41.38879,2.15899'
				}
			]
		},
		{
			'k':'check-distance-eq',
			'd':'Check Distance Is Equal',
			'ed':'Discover if the distance between two coordinates is equal to another',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates1',
					'r': true,
					't':'string',
					'p':'41.2522,-12.10'
				},
				{
					'n':'coordinates2',
					'r': true,
					't':'string',
					'p':'41.2522,-12.50'
				},
				{
					'n':'distance',
					'r': true,
					't':'string',
					'p':'33.44'
				}
			]
		},
		{
			'k':'check-distance-ge',
			'd':'Check Distance Is Greater Or Equal',
			'ed':'Discover if the distance in quilometers between two coordinates is greater or equal than another',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates1',
					'r': true,
					't':'string',
					'p':'41.2522,-12.10'
				},
				{
					'n':'coordinates2',
					'r': true,
					't':'string',
					'p':'41.2522,-12.50'
				},
				{
					'n':'distance',
					'r': true,
					't':'string',
					'p':'33'
				}
			]
		},
		{
			'k':'check-distance-gt',
			'd':'Check Distance Is Greater',
			'ed':'Discover if the distance in quilometers between two coordinates is greater than another',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates1',
					'r': true,
					't':'string',
					'p':'41.2522,-12.10'
				},
				{
					'n':'coordinates2',
					'r': true,
					't':'string',
					'p':'41.2522,-12.50'
				},
				{
					'n':'distance',
					'r': true,
					't':'string',
					'p':'30'
				}
			]
		},
		{
			'k':'check-distance-le',
			'd':'Check Distance Is Lower Or Equal',
			'ed':'Discover if the distance in quilometers between two coordinates is lower or equal than another',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates1',
					'r': true,
					't':'string',
					'p':'41.2522,-12.10'
				},
				{
					'n':'coordinates2',
					'r': true,
					't':'string',
					'p':'41.2522,-12.50'
				},
				{
					'n':'distance',
					'r': true,
					't':'string',
					'p':'34'
				}
			]
		},
		{
			'k':'check-distance-lt',
			'd':'Check Distance Is Lower',
			'ed':'Discover if the distance in quilometers between two coordinates is lower than another',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates1',
					'r': true,
					't':'string',
					'p':'41.2522,-12.10'
				},
				{
					'n':'coordinates2',
					'r': true,
					't':'string',
					'p':'41.2522,-12.50'
				},
				{
					'n':'distance',
					'r': true,
					't':'string',
					'p':'50'
				}
			]
		},
		{
			'k':'get-coordinate-usng',
			'd':'Get USNG Coordinates',
			'ed':'Get USNG coordinates by latitude and longitude',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates',
					'r': true,
					't':'string',
					'p':'41.38879,2.15899'
				}
			]
		},
		{
			'k':'get-coordinate-utm',
			'd':'Get UTM Coordinates',
			'ed':'Get UTM coordinates by latitude and longitude',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates',
					'r': true,
					't':'string',
					'p':'41.38879,2.15899'
				}
			]
		},
		{
			'k':'get-country-by-code',
			'd':'Get Country By ISO Code',
			'ed':'Get country name by its ISO code',
			'g':'geographic',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-country-by-currency-code',
			'd':'Get Country By Currency',
			'ed':'Get country name by currency ISO code',
			'g':'geographic',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'EUR'
				}
			]
		},
		{
			'k':'get-country-by-ip',
			'd':'Get Country By IP',
			'ed':'Get country name by IP address',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-country-by-name',
			'd':'Get Country By Name',
			'ed':'Get country by prefix',
			'g':'geographic',
			'p': [
				{
					'n':'country',
					'r': true,
					't':'string',
					'p':'Spa'
				}
			]
		},
		{
			'k':'get-country-by-phone',
			'd':'Get Country By Phone',
			'ed':'Get country name by phone number, with worldwide coverage',
			'g':'geographic',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'57122000111'
				}
			]
		},
		{
			'k':'get-country-code-by-name',
			'd':'Get Country Code By Name',
			'ed':'Get Alpha2 code by country prefix or name',
			'g':'geographic',
			'p': [
				{
					'n':'country',
					'r': true,
					't':'string',
					'p':'Spain'
				}
			]
		},
		{
			'k':'get-country-list-by-code',
			'd':'Get Countries By ISO Code',
			'ed':'Get multiple countries by ISO code',
			'g':'geographic',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-country-list-by-currency-code',
			'd':'Get Countries By Currency',
			'ed':'Get multiple country names by currency ISO code',
			'g':'geographic',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'EUR'
				}
			]
		},
		{
			'k':'get-country-list-by-name',
			'd':'Get Countries By Prefix',
			'ed':'Get multiple country names by initial name',
			'g':'geographic',
			'p': [
				{
					'n':'country',
					'r': true,
					't':'string',
					'p':'S'
				}
			]
		},
		{
			'k':'get-country-normalized',
			'd':'Get Normalized Country',
			'ed':'Allow to normalize a country, removing non allowed characters',
			'g':'geographic',
			'p': [
				{
					'n':'country',
					'r': true,
					't':'string',
					'p':'Spa1n'
				}
			]
		},
		{
			'k':'check-country-valid-iso',
			'd':'Check Country Code Exists',
			'ed':'Check if country ISO code exists',
			'g':'geographic',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-currency-by-country',
			'd':'Get Currency Code By Country Name',
			'ed':'Get ISO currency code by a country name',
			'g':'finance',
			'p': [
				{
					'n':'country',
					'r': true,
					't':'string',
					'p':'Spain'
				}
			]
		},
		{
			'k':'get-currency-by-country-isocode',
			'd':'Get Currency Code By Country Code',
			'ed':'Get ISO currency code by an ISO country code',
			'g':'finance',
			'p': [
				{
					'n':'country_code',
					'r': true,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-currency-by-ip',
			'd':'Get Currency By IP',
			'ed':'Get ISO currency code by IP address',
			'g':'finance',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-currency-by-isocode',
			'd':'Get Currency By ISO Currency Code',
			'ed':'Get an ISO currency code by a currency ISO code',
			'g':'finance',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'EUR'
				}
			]
		},
		{
			'k':'get-currency-converted-between-isocode-date',
			'd':'Get Conversion By Currencies And Date',
			'ed':'Convert amount between supported currencies and an exchange date',
			'g':'finance',
			'p': [
				{
					'n':'amount',
					'r': true,
					't':'string',
					'p':'10'
				},
				{
					'n':'isocode1',
					'r': true,
					't':'options',
					'p':'EUR',
					'o': [
						{
							'name':'AUD',
							'value':'AUD'
						},
						{
							'name':'BGN',
							'value':'BGN'
						},
						{
							'name':'BRL',
							'value':'BRL'
						},
						{
							'name':'CAD',
							'value':'CAD'
						},
						{
							'name':'CHF',
							'value':'CHF'
						},
						{
							'name':'CNY',
							'value':'CNY'
						},
						{
							'name':'CZK',
							'value':'CZK'
						},
						{
							'name':'DKK',
							'value':'DKK'
						},
						{
							'name':'EUR',
							'value':'EUR'
						},
						{
							'name':'GBP',
							'value':'GBP'
						},
						{
							'name':'HKD',
							'value':'HKD'
						},
						{
							'name':'HRK',
							'value':'HRK'
						},
						{
							'name':'HUF',
							'value':'HUF'
						},
						{
							'name':'IDR',
							'value':'IDR'
						},
						{
							'name':'ILS',
							'value':'ILS'
						},
						{
							'name':'INR',
							'value':'INR'
						},
						{
							'name':'ISK',
							'value':'ISK'
						},
						{
							'name':'JPY',
							'value':'JPY'
						},
						{
							'name':'KRW',
							'value':'KRW'
						},
						{
							'name':'MXN',
							'value':'MXN'
						},
						{
							'name':'MYR',
							'value':'MYR'
						},
						{
							'name':'NOK',
							'value':'NOK'
						},
						{
							'name':'NZD',
							'value':'NZD'
						},
						{
							'name':'PHP',
							'value':'PHP'
						},
						{
							'name':'PLN',
							'value':'PLN'
						},
						{
							'name':'RON',
							'value':'RON'
						},
						{
							'name':'RUB',
							'value':'RUB'
						},
						{
							'name':'SEK',
							'value':'SEK'
						},
						{
							'name':'SGD',
							'value':'SGD'
						},
						{
							'name':'THB',
							'value':'THB'
						},
						{
							'name':'TRY',
							'value':'TRY'
						},
						{
							'name':'USD',
							'value':'USD'
						},
						{
							'name':'ZAR',
							'value':'ZAR'
						}
					]
				},
				{
					'n':'isocode2',
					'r': true,
					't':'options',
					'p':'USD',
					'o': [
						{
							'name':'AUD',
							'value':'AUD'
						},
						{
							'name':'BGN',
							'value':'BGN'
						},
						{
							'name':'BRL',
							'value':'BRL'
						},
						{
							'name':'CAD',
							'value':'CAD'
						},
						{
							'name':'CHF',
							'value':'CHF'
						},
						{
							'name':'CNY',
							'value':'CNY'
						},
						{
							'name':'CZK',
							'value':'CZK'
						},
						{
							'name':'DKK',
							'value':'DKK'
						},
						{
							'name':'EUR',
							'value':'EUR'
						},
						{
							'name':'GBP',
							'value':'GBP'
						},
						{
							'name':'HKD',
							'value':'HKD'
						},
						{
							'name':'HRK',
							'value':'HRK'
						},
						{
							'name':'HUF',
							'value':'HUF'
						},
						{
							'name':'IDR',
							'value':'IDR'
						},
						{
							'name':'ILS',
							'value':'ILS'
						},
						{
							'name':'INR',
							'value':'INR'
						},
						{
							'name':'ISK',
							'value':'ISK'
						},
						{
							'name':'JPY',
							'value':'JPY'
						},
						{
							'name':'KRW',
							'value':'KRW'
						},
						{
							'name':'MXN',
							'value':'MXN'
						},
						{
							'name':'MYR',
							'value':'MYR'
						},
						{
							'name':'NOK',
							'value':'NOK'
						},
						{
							'name':'NZD',
							'value':'NZD'
						},
						{
							'name':'PHP',
							'value':'PHP'
						},
						{
							'name':'PLN',
							'value':'PLN'
						},
						{
							'name':'RON',
							'value':'RON'
						},
						{
							'name':'RUB',
							'value':'RUB'
						},
						{
							'name':'SEK',
							'value':'SEK'
						},
						{
							'name':'SGD',
							'value':'SGD'
						},
						{
							'name':'THB',
							'value':'THB'
						},
						{
							'name':'TRY',
							'value':'TRY'
						},
						{
							'name':'USD',
							'value':'USD'
						},
						{
							'name':'ZAR',
							'value':'ZAR'
						}
					]
				},
				{
					'n':'date',
					'r': false,
					't':'string',
					'p':'2018-02-12'
				}
			]
		},
		{
			'k':'get-currency-list-by-country',
			'd':'Get Currencies By Country',
			'ed':'Get multiple ISO currency codes by a country name',
			'g':'finance',
			'p': [
				{
					'n':'country',
					'r': true,
					't':'string',
					'p':'Spain'
				}
			]
		},
		{
			'k':'get-currency-list-by-ip',
			'd':'Get Currencies By IP',
			'ed':'Get all ISO currency codes by an IP address',
			'g':'finance',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-currency-list-by-isocode',
			'd':'Get Currencies By ISO Code',
			'ed':'Get multiple ISO currency codes by a country ISO code',
			'g':'finance',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'EUR'
				}
			]
		},
		{
			'k':'check-currency-valid-iso',
			'd':'Check ISO Currency Code Is Valid',
			'ed':'Discover if an ISO currency code is valid',
			'g':'finance',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'EUR'
				}
			]
		},
		{
			'k':'check-date-betw',
			'd':'Check Date Is Between Dates',
			'ed':'Discover if a date (date1) is betwen two dates (date2, date3)',
			'g':'personal',
			'p': [
				{
					'n':'date1',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				},
				{
					'n':'date2',
					'r': true,
					't':'string',
					'p':'1975-05-19'
				},
				{
					'n':'date3',
					'r': true,
					't':'string',
					'p':'1975-05-22'
				}
			]
		},
		{
			'k':'get-date-difference',
			'd':'Get Difference Between Dates',
			'ed':'Returns difference between two dates (start and end) in seconds, minutes, hours or days<br>By default, difference is returned in seconds.',
			'g':'personal',
			'p': [
				{
					'n':'date1',
					'r': true,
					't':'string',
					'p':'2018-10-10 00:00:00'
				},
				{
					'n':'date2',
					'r': true,
					't':'string',
					'p':'2018-10-11 00:00:00'
				},
				{
					'n':'period',
					'r': true,
					't':'options',
					'p':'seconds',
					'o': [
						{
							'name':'Days',
							'value':'days'
						},
						{
							'name':'Hours',
							'value':'hours'
						},
						{
							'name':'Minutes',
							'value':'minutes'
						},
						{
							'name':'Seconds',
							'value':'seconds'
						}
					]
				}
			]
		},
		{
			'k':'check-date-eq',
			'd':'Check Dates Are Equal',
			'ed':'Discover if two dates are equal',
			'g':'personal',
			'p': [
				{
					'n':'date1',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				},
				{
					'n':'date2',
					'r': false,
					't':'string',
					'p':'1975-05-20'
				}
			]
		},
		{
			'k':'check-date-ge',
			'd':'Check Date Is Greater Or Equal',
			'ed':'Discover if a date is greater or equal',
			'g':'personal',
			'p': [
				{
					'n':'date1',
					'r': true,
					't':'string',
					'p':'1975-05-22'
				},
				{
					'n':'date2',
					'r': false,
					't':'string',
					'p':'1975-05-21'
				}
			]
		},
		{
			'k':'check-date-gt',
			'd':'Check Date Is Greater',
			'ed':'Discover if a date is greater',
			'g':'personal',
			'p': [
				{
					'n':'date1',
					'r': true,
					't':'string',
					'p':'1975-05-22'
				},
				{
					'n':'date2',
					'r': false,
					't':'string',
					'p':'1975-05-21'
				}
			]
		},
		{
			'k':'check-date-le',
			'd':'Check Date Is Lower Or Equal',
			'ed':'Discover if a date is lower or equal',
			'g':'personal',
			'p': [
				{
					'n':'date1',
					'r': true,
					't':'string',
					'p':'1975-05-19'
				},
				{
					'n':'date2',
					'r': false,
					't':'string',
					'p':'1975-05-20'
				}
			]
		},
		{
			'k':'check-date-leap',
			'd':'Check Date Is Leap Year',
			'ed':'Discover if a date belongs to a leap year',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': false,
					't':'string',
					'p':'2008-05-20'
				}
			]
		},
		{
			'k':'check-date-lt',
			'd':'Check Date Is Lower',
			'ed':'Discover if a date is lower',
			'g':'personal',
			'p': [
				{
					'n':'date1',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				},
				{
					'n':'date2',
					'r': false,
					't':'string',
					'p':'1975-05-21'
				}
			]
		},
		{
			'k':'get-date-normalized',
			'd':'Get Normalized Date',
			'ed':'Allow to normalize a date, removing non allowed characters',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'20 /01/2018'
				}
			]
		},
		{
			'k':'get-date-parsed',
			'd':'Get Parsed Datetime',
			'ed':'Parse datetime, without format dependency, into multiple fields',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'20/01/2018'
				}
			]
		},
		{
			'k':'check-date-valid',
			'd':'Check Date Is Valid',
			'ed':'Discover if a date has a valid format',
			'g':'personal',
			'p': [
				{
					'n':'date',
					'r': true,
					't':'string',
					'p':'1975-05-20'
				}
			]
		},
		{
			'k':'get-device-by-ua',
			'd':'Get Device By User Agent',
			'ed':'Discover device features by user agent',
			'g':'internet',
			'p': [
				{
					'n':'useragent',
					'r': true,
					't':'string',
					'p':'AppleTV5,3/9.1.1'
				}
			]
		},
		{
			'k':'get-domain-blacklists',
			'd':'Get Domain Blacklists',
			'ed':'Get all blacklists where a domain appears',
			'g':'security',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'gmail.com'
				}
			]
		},
		{
			'k':'get-url-by-domain',
			'd':'Get Default URL By Domain',
			'ed':'Get valid, existing and default URL when accessing a domain using a web browser.',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'google.es'
				}
			]
		},
		{
			'k':'get-domain-by-ip',
			'd':'Get Domain By IP',
			'ed':'Get the network name of and IP address',
			'g':'internet',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'212.85.34.20'
				}
			]
		},
		{
			'k':'get-domain-by-url',
			'd':'Get Root Domain By Web Address',
			'ed':'Get root domain of any web address, removing non needed characters.',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://www.uproc.io'
				}
			]
		},
		{
			'k':'check-domain-catchall',
			'd':'Check Email Domain Is Catchall',
			'ed':'Check if domain accepts all emails, existing or not',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'abinitio.es'
				}
			]
		},
		{
			'k':'check-domain-certificate',
			'd':'Check Domain Has Valid Certificate',
			'ed':'Check if domain has a valid SSL certificate',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': false,
					't':'string',
					'p':'uproc.io'
				}
			]
		},
		{
			'k':'get-domain-certificate',
			'd':'Get Certificate By Domain',
			'ed':'Get full SSL certificate data by domain (or website) and monitor your certificate status.<br><br>If domain has port 443 opened, a response will be returned.',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'uproc.io'
				}
			]
		},
		{
			'k':'check-domain-disposable',
			'd':'Check Email Domain Is Temporary',
			'ed':'Check if domain is temporary or not',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'cowstore.org'
				}
			]
		},
		{
			'k':'check-domain-exist',
			'd':'Check Domain Exists',
			'ed':'Check if domain exists',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'mydomain.com'
				}
			]
		},
		{
			'k':'check-domain-format',
			'd':'Check Domain Has Valid Format',
			'ed':'Check if domain has a valid format',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'google.es'
				}
			]
		},
		{
			'k':'check-domain-free',
			'd':'Check Email Domain Is Free',
			'ed':'Check if domain is a free service domain provider',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'gmail.com'
				}
			]
		},
		{
			'k':'get-domain-isp',
			'd':'Get ISP By Domain',
			'ed':'Get ISP known name of email domain name (hotmail, yahoo, gmail, mailgun, zoho, other)',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'gmail.com'
				}
			]
		},
		{
			'k':'get-domain-logo',
			'd':'Get Logo By Domain',
			'ed':'Discover logo (favicon) used in domain',
			'g':'image',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'uproc.io'
				}
			]
		},
		{
			'k':'check-domain-mx',
			'd':'Check Domain Has MX Record',
			'ed':'Check if domain has a MX record',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'google.es'
				}
			]
		},
		{
			'k':'get-url-pdf',
			'd':'Get Pdf By URL',
			'ed':'Generate a PDF file by URL provided using Chrome browser',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://uproc.io'
				}
			]
		},
		{
			'k':'check-domain-record',
			'd':'Check Domain Has DNS Record',
			'ed':'Check if domain has a record of that type',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'mydomain.com'
				},
				{
					'n':'type',
					'r': false,
					't':'options',
					'p':'A',
					'o': [
						{
							'name':'A',
							'value':'A'
						},
						{
							'name':'AAAA',
							'value':'AAAA'
						},
						{
							'name':'CNAME',
							'value':'CNAME'
						},
						{
							'name':'MX',
							'value':'MX'
						},
						{
							'name':'NS',
							'value':'NS'
						},
						{
							'name':'TXT',
							'value':'TXT'
						}
					]
				}
			]
		},
		{
			'k':'get-domain-record',
			'd':'Get Domain Record By DNS Type',
			'ed':'Get the domain record by its type',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'google.es'
				},
				{
					'n':'type',
					'r': false,
					't':'options',
					'p':'A',
					'o': [
						{
							'name':'A',
							'value':'A'
						},
						{
							'name':'AAAA',
							'value':'AAAA'
						},
						{
							'name':'CNAME',
							'value':'CNAME'
						},
						{
							'name':'MX',
							'value':'MX'
						},
						{
							'name':'NS',
							'value':'NS'
						},
						{
							'name':'TXT',
							'value':'TXT'
						}
					]
				}
			]
		},
		{
			'k':'get-domain-records',
			'd':'Get Domain DNS Records',
			'ed':'Get all domain dns records',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'google.es'
				}
			]
		},
		{
			'k':'check-domain-reverse',
			'd':'Check Domain Has IP',
			'ed':'Check if domain has assigned the IP address defined',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': false,
					't':'string',
					'p':'mail.nova.es'
				},
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'212.85.34.20'
				}
			]
		},
		{
			'k':'get-domain-reverse-ip',
			'd':'Get IP By Domain',
			'ed':'Get the IPv4 address linked with a domain',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'www.gmail.com'
				}
			]
		},
		{
			'k':'get-url-screenshot',
			'd':'Get Screenshot By URL',
			'ed':'Generate a screenshot by URL provided using Chrome browser',
			'g':'image',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://uproc.io'
				},
				{
					'n':'width',
					'r': false,
					't':'options',
					'p':'640',
					'o': [
						{
							'name':'1024',
							'value':'1024'
						},
						{
							'name':'160',
							'value':'160'
						},
						{
							'name':'320',
							'value':'320'
						},
						{
							'name':'640',
							'value':'640'
						},
						{
							'name':'800',
							'value':'800'
						}
					]
				},
				{
					'n':'fullpage',
					'r': false,
					't':'options',
					'p':'no',
					'o': [
						{
							'name':'No',
							'value':'no'
						},
						{
							'name':'Yes',
							'value':'yes'
						}
					]
				}
			]
		},
		{
			'k':'get-domain-technologies',
			'd':'Get Technologies By Domain',
			'ed':'Discover client and server technologies used in domain',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'gmail.com'
				}
			]
		},
		{
			'k':'get-url-technologies',
			'd':'Get Technologies By URL',
			'ed':'Discover client and server technologies used in web page',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://www.uproc.io/'
				}
			]
		},
		{
			'k':'get-domain-visits',
			'd':'Get Visits By Domain',
			'ed':'Get Website visits and rank of any domain',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'gmail.com'
				}
			]
		},
		{
			'k':'get-domain-whois',
			'd':'Get Whois By Domain',
			'ed':'Get the domain whois data by fields',
			'g':'internet',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'killia.com'
				}
			]
		},
		{
			'k':'get-ip-whois',
			'd':'Get Whois By IP Address',
			'ed':'Get whois data fields by IP address provided.',
			'g':'internet',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'140.82.118.4'
				}
			]
		},
		{
			'k':'send-email-custom',
			'd':'Send Custom Email',
			'ed':'Send a custom email (HTML supported) to a recipient',
			'g':'communication',
			'p': [
				{
					'n':'email_from',
					'r': true,
					't':'string',
					'p':'mcolomer@killia.com'
				},
				{
					'n':'email_to',
					'r': true,
					't':'string',
					'p':'mcolomer@gmail.com'
				},
				{
					'n':'subject',
					'r': true,
					't':'string',
					'p':'Welcome email'
				},
				{
					'n':'body',
					'r': true,
					't':'string',
					'p':'Hi!<br><br>Welcome to uProc and start <b>improving</b> your business processes!'
				}
			]
		},
		{
			'k':'check-email-disposable',
			'd':'Check Email Is Disposable Domain',
			'ed':'Check if email domain belongs to a disposable email service',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'info@jetable.com'
				}
			]
		},
		{
			'k':'get-email-domain',
			'd':'Get Domain By Email',
			'ed':'Allow to get domain from an email',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				}
			]
		},
		{
			'k':'check-email-exists',
			'd':'Check Email Exists (Simple)',
			'ed':'Discover if the email recipient exists, returning email status',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				}
			]
		},
		{
			'k':'check-email-exists-extended',
			'd':'Check Email Exists (Extended)',
			'ed':'Discover if an email is valid, hardbounce, softbounce, spamtrap, free, temporary and recipient exists.<br><br>There are catchall (like Yahoo) or temporary domains that do not return the actual existence of an email',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				}
			]
		},
		{
			'k':'get-email-first-references',
			'd':'Get First Web References Of An Email',
			'ed':'Get three first web references of an email published on Internet',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'mcolomer@killia.com'
				}
			]
		},
		{
			'k':'get-email-fix',
			'd':'Get Fixed Domain Email',
			'ed':'Allow to fix email domain for common domains (gmail, yahoo, hotmail,...)',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'test@gmil.com'
				}
			]
		},
		{
			'k':'check-email-format',
			'd':'Check Email Has Valid Format',
			'ed':'Check if email has a valid format',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'test@test.com'
				}
			]
		},
		{
			'k':'check-email-free',
			'd':'Check Email Is Free',
			'ed':'Check if email belongs to free service provider, like gmail, hotmail, ...',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'info@gmail.com'
				}
			]
		},
		{
			'k':'get-email-gdpr-list-by-domain',
			'd':'Get GDPR Emails By Domain',
			'ed':'Get GDPR compliant emails list by domain for your Email Marketing campaigns in Europe.',
			'g':'communication',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'uproc.io'
				}
			]
		},
		{
			'k':'get-email-list-by-domain',
			'd':'Get Emails By Domain',
			'ed':'Get emails list found on internet by domain or URI (similar to hunter.io)',
			'g':'communication',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'uoc.edu'
				},
				{
					'n':'page',
					'r': false,
					't':'string',
					'p':'1'
				}
			]
		},
		{
			'k':'get-email-list-by-email',
			'd':'Get Emails By Email',
			'ed':'Get emails list found on internet by non-free email (similar to hunter.io)',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				},
				{
					'n':'page',
					'r': false,
					't':'string',
					'p':'1'
				}
			]
		},
		{
			'k':'get-email-list-in-site',
			'd':'Get Emails In Website',
			'ed':'Get emails list found inside website by domain or URI (similar to hunter.io).<br><br> Useful to locate emails for your email marketing campaigns in a moment.<br><br>If website contains lots of emails, you can paginate them with the <i>page</i> parameter',
			'g':'communication',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'uoc.edu'
				},
				{
					'n':'page',
					'r': false,
					't':'string',
					'p':'1'
				}
			]
		},
		{
			'k':'get-email-normalized',
			'd':'Get Normalized Email',
			'ed':'Allow to normalize email address, removing non allowed characters',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'test @gmail.com'
				}
			]
		},
		{
			'k':'get-email-recipient',
			'd':'Get Email By Name, Surname And Domain',
			'ed':`Discover an email by company website or domain and prospect's firstname and lastname.<br><br>Tools checks multiple email variants in real-time, and returns a result depending on email server response.<br><br>You can use <a href='https://jvz8.com/c/945249/166477' target='_blank'>Dux-Soup</a> and FindThatLead with <a href='https://uproc.io/uproc_for_sheets?utm_source=webapp&utm_medium=referral&utm_campaign=tool&utm_content=get-recipient' target='_blank'>uProc for Sheets</a> or the <a href='https://app.uproc.io/#/wizard/process' target='_blank'>Wizard</a> to get professional email of your leads!`,
			'g':'communication',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'killia.com'
				},
				{
					'n':'firstname',
					'r': true,
					't':'string',
					'p':'Miquel'
				},
				{
					'n':'lastname',
					'r': false,
					't':'string',
					'p':'Colomer'
				}
			]
		},
		{
			'k':'get-email-recipient-gdpr',
			'd':'Get Public Email By Name, Surname And Domain (GDPR)',
			'ed':`Discover an email by company website or domain and prospect's firstname and lastname.<br><br>The tool only uses publicly available emails found on the internet and matches the recipient by first name and last name (GDPR compliant)`,
			'g':'communication',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'killia.com'
				},
				{
					'n':'firstname',
					'r': true,
					't':'string',
					'p':'hello'
				},
				{
					'n':'lastname',
					'r': false,
					't':'string',
					'p':''
				}
			]
		},
		{
			'k':'get-email-references',
			'd':'Get Web References Of An Email',
			'ed':'Get web references of an email published on Internet',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'mcolomer@killia.com'
				}
			]
		},
		{
			'k':'check-email-role',
			'd':'Check Email Is Role Based',
			'ed':'Check if email belongs to a system or role based account',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'test@gmail.com'
				}
			]
		},
		{
			'k':'send-mobile-sms',
			'd':'Send Custom Sms',
			'ed':'Send a custom sms to a recipient with worldwide coverage',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				},
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Thanks for your participation!'
				}
			]
		},
		{
			'k':'check-email-smtp',
			'd':'Check Email Has Smtp Server',
			'ed':'Check if email domain has a server to receive emails',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				}
			]
		},
		{
			'k':'check-email-spamtrap',
			'd':'Check Email Is Spam Trap',
			'ed':'Check if email is a spam trap',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'zzzwuzhdgvrxy@yahoo.co.jp'
				}
			]
		},
		{
			'k':'get-email-type',
			'd':'Get Email Type',
			'ed':'Checks if email is personal (miquel@uproc.io) or generic (hello@uproc.io).',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				}
			]
		},
		{
			'k':'get-file-copied-between-urls',
			'd':'Get File Copied Between URLs',
			'ed':'Copy file from one URL to another URL',
			'g':'internet',
			'p': [
				{
					'n':'source',
					'r': true,
					't':'string',
					'p':'http://www.pdf995.com/samples/pdf.pdf'
				},
				{
					'n':'destination',
					'r': true,
					't':'string',
					'p':'s3://ACCESSKEY:SECRETKEY@s3.amazon.com/BUCKET_NAME/sample.pdf'
				}
			]
		},
		{
			'k':'get-fullname-parsed',
			'd':'Get Parsed Fullname',
			'ed':'Normalize fullname, fixing abbreviations, sorting if necessary and returning firstname, lastname and gender',
			'g':'personal',
			'p': [
				{
					'n':'fullname',
					'r': true,
					't':'string',
					'p':'Colomer Salas Miquel'
				}
			]
		},
		{
			'k':'get-gender-by-email',
			'd':'Get Gender By Email',
			'ed':'Discover the gender of a person by the email, if person name is included in email',
			'g':'personal',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel.colomer@gmail.com'
				}
			]
		},
		{
			'k':'get-gender-by-personal-name',
			'd':'Get Gender By Name',
			'ed':'Discover the gender of a person or company by name',
			'g':'personal',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Marc'
				}
			]
		},
		{
			'k':'check-gender-valid',
			'd':'Check Gender Is Valid',
			'ed':'Discover if a gender value is valid (multilanguage)',
			'g':'personal',
			'p': [
				{
					'n':'gender',
					'r': true,
					't':'string',
					'p':'male'
				}
			]
		},
		{
			'k':'get-image-exif',
			'd':'Get EXIF Metadata From Image',
			'ed':'It allows to discover all geograhical and technical EXIF metadata present in a photographic JPEG image.',
			'g':'image',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://killia-internal.s3-eu-west-1.amazonaws.com/sample/uproc_photo_with_exif.jpg'
				}
			]
		},
		{
			'k':'get-image-with-text',
			'd':'Get Image With Text',
			'ed':'Generate a new image by URL and text',
			'g':'image',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://killia-internal.s3-eu-west-1.amazonaws.com/sample/uproc_sample_resized.jpg'
				},
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi Miquel!'
				},
				{
					'n':'size',
					'r': false,
					't':'string',
					'p':'80'
				}
			]
		},
		{
			'k':'get-qr-decoded',
			'd':'Get Decoded QR Code',
			'ed':'Get QR Code decoded content by an image URL',
			'g':'image',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://s3.amazonaws.com/any-file/qr_38efdf6c60074375a6b0061201c644ac.png'
				}
			]
		},
		{
			'k':'get-qr-encoded',
			'd':'Get Encoded QR Code',
			'ed':'Get QR Code encoded by a text',
			'g':'image',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Sample text to encode'
				}
			]
		},
		{
			'k':'get-ip-blacklists',
			'd':'Get Ip Blacklists',
			'ed':'Get all blacklists where an IP address appears',
			'g':'security',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'172.217.168.165'
				}
			]
		},
		{
			'k':'get-linkedin-connections',
			'd':'Get LinkedIn Last Received Connections',
			'ed':`Extract last <a href='https://www.linkedin.com/mynetwork/invite-connect/connections/' target='_blank'>80 connections</a> from your LinkedIn profile`,
			'g':'communication',
			'p': [
				{
					'n':'list',
					'r': false,
					't':'string',
					'p':'last-connections'
				},
				{
					'n':'mode',
					'r': false,
					't':'options',
					'p':'fast',
					'o': [
						{
							'name':'Fast',
							'value':'fast'
						},
						{
							'name':'Normal',
							'value':'normal'
						}
					]
				}
			]
		},
		{
			'k':'get-linkedin-group-members',
			'd':'Get LinkedIn Group Members',
			'ed':'Get members in a LinkedIn group',
			'g':'communication',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/groups/59923/members/'
				},
				{
					'n':'list',
					'r': false,
					't':'string',
					'p':'my-list'
				}
			]
		},
		{
			'k':'get-linkedin-invitations',
			'd':'Get LinkedIn Last Sent Invitations',
			'ed':`Extract last <a href='https://www.linkedin.com/mynetwork/invitation-manager/sent/' target='_blank'>80 invitations</a> sent from your LinkedIn`,
			'g':'communication',
			'p': [
				{
					'n':'list',
					'r': false,
					't':'string',
					'p':'last-invitations'
				},
				{
					'n':'mode',
					'r': false,
					't':'options',
					'p':'fast',
					'o': [
						{
							'name':'Fast',
							'value':'fast'
						},
						{
							'name':'Normal',
							'value':'normal'
						}
					]
				}
			]
		},
		{
			'k':'get-linkedin-post-comments',
			'd':'Get LinkedIn Post Comments',
			'ed':'Get users who comment a post on LinkedIn',
			'g':'communication',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/posts/miquelcolomersalas_gdpr-emails-emailmarketing-activity-6607189465423314944-dbPv'
				},
				{
					'n':'list',
					'r': false,
					't':'string',
					'p':'my-list'
				}
			]
		},
		{
			'k':'get-linkedin-post-likes',
			'd':'Get LinkedIn Post Likes',
			'ed':'Get users who like a post on LinkedIn',
			'g':'communication',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/posts/miquelcolomersalas_gdpr-emails-emailmarketing-activity-6607189465423314944-dbPv'
				},
				{
					'n':'list',
					'r': false,
					't':'string',
					'p':'my-list'
				}
			]
		},
		{
			'k':'get-linkedin-profile',
			'd':'Get LinkedIn Profile',
			'ed':'Extract a LinkedIn profile (url format accepted: https://linkedin.com/in/USERNAME)',
			'g':'communication',
			'p': [
				{
					'n':'profile',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/in/miquelcolomersalas'
				},
				{
					'n':'list',
					'r': false,
					't':'string',
					'p':'my-list'
				},
				{
					'n':'mode',
					'r': false,
					't':'options',
					'p':'fast',
					'o': [
						{
							'name':'Fast',
							'value':'fast'
						},
						{
							'name':'Normal',
							'value':'normal'
						},
						{
							'name':'Slow',
							'value':'slow'
						}
					]
				}
			]
		},
		{
			'k':'check-linkedin-profile-is-contact',
			'd':'Check LinkedIn Profile Is Contact',
			'ed':'Checks if a LinkedIn profile (url format accepted: https://linkedin.com/in/USERNAME) is a first degree contact',
			'g':'communication',
			'p': [
				{
					'n':'profile',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/in/miquelcolomersalas'
				}
			]
		},
		{
			'k':'get-linkedin-profiles',
			'd':'Get LinkedIn Profiles',
			'ed':'Extract results from a LinkedIn search (url format accepted: https://linkedin.com/search/results/people/)',
			'g':'communication',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/search/results/people/?facetGeoRegion=%5B%22es%3A5064%22%5D&facetNetwork=%5B%22S%22%2C%22O%22%5D&keywords=cmo%20barcelona'
				},
				{
					'n':'list',
					'r': false,
					't':'string',
					'p':'my-list'
				},
				{
					'n':'mode',
					'r': false,
					't':'options',
					'p':'fast',
					'o': [
						{
							'name':'Fast',
							'value':'fast'
						},
						{
							'name':'Normal',
							'value':'normal'
						}
					]
				},
				{
					'n':'amount',
					'r': false,
					't':'string',
					'p':'10'
				}
			]
		},
		{
			'k':'get-linkedin-profiles-by-company',
			'd':'Get LinkedIn Company Employees',
			'ed':'Extract employees of a LinkedIn company profile',
			'g':'communication',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/company/ibm-aspera/'
				},
				{
					'n':'list',
					'r': false,
					't':'string',
					'p':'employees'
				}
			]
		},
		{
			'k':'send-linkedin-visit',
			'd':'Send LinkedIn Profile Visit',
			'ed':'Visits a profile to show interest and get profile views in return from contact, increasing your LinkedIn network',
			'g':'communication',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://www.linkedin.com/in/miquelcolomersalas/'
				}
			]
		},
		{
			'k':'check-list-contains',
			'd':'Check List Contains',
			'ed':'Check if the list contains a specific item',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'2'
				}
			]
		},
		{
			'k':'check-list-ends',
			'd':'Check List Ends With',
			'ed':'Check if the list ends with a specific element',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'3'
				}
			]
		},
		{
			'k':'check-list-length-betw',
			'd':'Check Length List Between',
			'ed':'Check if the length of a list is between two quantities',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'length1',
					'r': true,
					't':'string',
					'p':'3'
				},
				{
					'n':'length2',
					'r': true,
					't':'string',
					'p':'4'
				}
			]
		},
		{
			'k':'check-list-length-eq',
			'd':'Check Length List Equal',
			'ed':'Checks if the length of a list equals a specified quantity',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'3'
				}
			]
		},
		{
			'k':'check-list-length-ge',
			'd':'Check Length List Greater Or Equal',
			'ed':'Check if the length of a list is greater than or equal to a certain amount',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'3'
				}
			]
		},
		{
			'k':'check-list-length-gt',
			'd':'Check Length List Greater',
			'ed':'Check if the length of a list is greater than a certain amount',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'2'
				}
			]
		},
		{
			'k':'check-list-length-le',
			'd':'Check Length List Lower Or Equal',
			'ed':'Check if the length of a list is less than or equal to a certain amount',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'3'
				}
			]
		},
		{
			'k':'check-list-length-lt',
			'd':'Check Length List Lower',
			'ed':'',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'4'
				}
			]
		},
		{
			'k':'check-list-max',
			'd':'Check Greater Element',
			'ed':'Checks if the largest item in a list matches the provided item',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,4,8,3,4,5'
				},
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'8'
				}
			]
		},
		{
			'k':'get-list-max',
			'd':'Get Greater Element',
			'ed':'Returns the largest item in a list',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'4,1,2,3,4'
				}
			]
		},
		{
			'k':'check-list-min',
			'd':'Check Lower Element',
			'ed':'Checks if the smallest element in a list matches the provided element',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'5,6,1,3,7'
				},
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'1'
				}
			]
		},
		{
			'k':'get-list-min',
			'd':'Get Lower Element',
			'ed':'Returns the smallest item in a list',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'4,1,2,3,4'
				}
			]
		},
		{
			'k':'get-list-sort',
			'd':'Get Sorted List',
			'ed':'Returns an ascending sorted list',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'4,1,2,3,4'
				}
			]
		},
		{
			'k':'check-list-sorted',
			'd':'Check List Is Sorted',
			'ed':'Check if a list is sorted in ascending order',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3,4,5'
				}
			]
		},
		{
			'k':'check-list-starts',
			'd':'Check List Starts With',
			'ed':'Check if the list starts with a specific element',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'1'
				}
			]
		},
		{
			'k':'check-list-unique',
			'd':'Check Unique Es List',
			'ed':'Check if a list consists of unique elements',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3,4,5'
				}
			]
		},
		{
			'k':'get-list-unique',
			'd':'Get Unique List',
			'ed':'Returns a single list, with no repeating elements',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'4,1,2,3,4'
				}
			]
		},
		{
			'k':'check-list-valid',
			'd':'Check Valid List',
			'ed':'Check if the supplied values ​​form a valid list of elements',
			'g':'text',
			'p': [
				{
					'n':'list',
					'r': true,
					't':'string',
					'p':'1,2,3'
				},
				{
					'n':'separator',
					'r': true,
					't':'string',
					'p':','
				}
			]
		},
		{
			'k':'get-locale-by-ip',
			'd':'Get Locale Data By IP',
			'ed':'Discover locale data (currency, language) by ipv4 or ipv6 address.',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-location-by-coordinates',
			'd':'Get Location By Coordinates',
			'ed':'Discover the city name, zipcode, province or country by latitude and longitude',
			'g':'geographic',
			'p': [
				{
					'n':'coordinates',
					'r': true,
					't':'string',
					'p':'41.619206,2.2920828'
				}
			]
		},
		{
			'k':'get-location-by-ip',
			'd':'Get Location By IP',
			'ed':'Discover the city name, zipcode, province, country, latitude and longitude from an ipv4 or ipv6 address',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-reputation-by-ip',
			'd':'Get Reputation By IP',
			'ed':'Discover reputation by ipv4 or ipv6 address',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-time-by-ip',
			'd':'Get Time Data By IP',
			'ed':'Discover datetime data by ipv4 or ipv6 address',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-location-by-name',
			'd':'Get Location By Name',
			'ed':'Discover location data by name',
			'g':'geographic',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Cyberclick S.L.'
				}
			]
		},
		{
			'k':'get-location-by-phone',
			'd':'Get Location By Landline Phone (ES)',
			'ed':'Discover the city and the province from a landline phone number (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'848491812'
				}
			]
		},
		{
			'k':'get-location-by-zipcode',
			'd':'Get Location By Zipcode (ES)',
			'ed':'Discover the city and the province from a zipcode number (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'08012'
				}
			]
		},
		{
			'k':'get-location-extended-by-ip',
			'd':'Get Extended Location By IP',
			'ed':'Discover geographical, company, timezone and reputation data by IPv4 address',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-location-geocoded-by-ip',
			'd':'Get Geocoded Location By IP',
			'ed':'Discover the city name, zipcode, province, country, latitude and longitude from an ipv4 or ipv6 address and geocodes it',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-location-list-by-name',
			'd':'Get Locations By Name',
			'ed':'Get most relevants locations by name (Google Maps typical search)',
			'g':'geographic',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Pintores Granollers'
				}
			]
		},
		{
			'k':'get-location-list-by-params',
			'd':'Get Locations By Parameters',
			'ed':'Get most relevants locations by name, category, location and radius',
			'g':'geographic',
			'p': [
				{
					'n':'name',
					'r': false,
					't':'string',
					'p':'Saba'
				},
				{
					'n':'category',
					'r': false,
					't':'options',
					'p':'parking',
					'o': [
						{
							'name':'Accounting',
							'value':'accounting'
						},
						{
							'name':'Airport',
							'value':'airport'
						},
						{
							'name':'Amusement_park',
							'value':'amusement_park'
						},
						{
							'name':'Aquarium',
							'value':'aquarium'
						},
						{
							'name':'Art_gallery',
							'value':'art_gallery'
						},
						{
							'name':'Atm',
							'value':'atm'
						},
						{
							'name':'Bakery',
							'value':'bakery'
						},
						{
							'name':'Bank',
							'value':'bank'
						},
						{
							'name':'Bar',
							'value':'bar'
						},
						{
							'name':'Beauty_salon',
							'value':'beauty_salon'
						},
						{
							'name':'Bicycle_store',
							'value':'bicycle_store'
						},
						{
							'name':'Book_store',
							'value':'book_store'
						},
						{
							'name':'Bowling_alley',
							'value':'bowling_alley'
						},
						{
							'name':'Bus_station',
							'value':'bus_station'
						},
						{
							'name':'Cafe',
							'value':'cafe'
						},
						{
							'name':'Campground',
							'value':'campground'
						},
						{
							'name':'Car_dealer',
							'value':'car_dealer'
						},
						{
							'name':'Car_rental',
							'value':'car_rental'
						},
						{
							'name':'Car_repair',
							'value':'car_repair'
						},
						{
							'name':'Car_wash',
							'value':'car_wash'
						},
						{
							'name':'Casino',
							'value':'casino'
						},
						{
							'name':'Cemetery',
							'value':'cemetery'
						},
						{
							'name':'Church',
							'value':'church'
						},
						{
							'name':'City_hall',
							'value':'city_hall'
						},
						{
							'name':'Clothing_store',
							'value':'clothing_store'
						},
						{
							'name':'Convenience_store',
							'value':'convenience_store'
						},
						{
							'name':'Courthouse',
							'value':'courthouse'
						},
						{
							'name':'Dentist',
							'value':'dentist'
						},
						{
							'name':'Department_store',
							'value':'department_store'
						},
						{
							'name':'Doctor',
							'value':'doctor'
						},
						{
							'name':'Electrician',
							'value':'electrician'
						},
						{
							'name':'Electronics_store',
							'value':'electronics_store'
						},
						{
							'name':'Embassy',
							'value':'embassy'
						},
						{
							'name':'Establishment',
							'value':'establishment'
						},
						{
							'name':'Finance',
							'value':'finance'
						},
						{
							'name':'Fire_station',
							'value':'fire_station'
						},
						{
							'name':'Florist',
							'value':'florist'
						},
						{
							'name':'Food',
							'value':'food'
						},
						{
							'name':'Funeral_home',
							'value':'funeral_home'
						},
						{
							'name':'Furniture_store',
							'value':'furniture_store'
						},
						{
							'name':'Gas_station',
							'value':'gas_station'
						},
						{
							'name':'General_contractor',
							'value':'general_contractor'
						},
						{
							'name':'Grocery_or_supermarket',
							'value':'grocery_or_supermarket'
						},
						{
							'name':'Gym',
							'value':'gym'
						},
						{
							'name':'Hair_care',
							'value':'hair_care'
						},
						{
							'name':'Hardware_store',
							'value':'hardware_store'
						},
						{
							'name':'Health',
							'value':'health'
						},
						{
							'name':'Hindu_temple',
							'value':'hindu_temple'
						},
						{
							'name':'Home_goods_store',
							'value':'home_goods_store'
						},
						{
							'name':'Hospital',
							'value':'hospital'
						},
						{
							'name':'Insurance_agency',
							'value':'insurance_agency'
						},
						{
							'name':'Jewelry_store',
							'value':'jewelry_store'
						},
						{
							'name':'Laundry',
							'value':'laundry'
						},
						{
							'name':'Lawyer',
							'value':'lawyer'
						},
						{
							'name':'Library',
							'value':'library'
						},
						{
							'name':'Liquor_store',
							'value':'liquor_store'
						},
						{
							'name':'Local_government_office',
							'value':'local_government_office'
						},
						{
							'name':'Locksmith',
							'value':'locksmith'
						},
						{
							'name':'Lodging',
							'value':'lodging'
						},
						{
							'name':'Meal_delivery',
							'value':'meal_delivery'
						},
						{
							'name':'Meal_takeaway',
							'value':'meal_takeaway'
						},
						{
							'name':'Mosque',
							'value':'mosque'
						},
						{
							'name':'Movie_rental',
							'value':'movie_rental'
						},
						{
							'name':'Movie_theater',
							'value':'movie_theater'
						},
						{
							'name':'Moving_location',
							'value':'moving_location'
						},
						{
							'name':'Museum',
							'value':'museum'
						},
						{
							'name':'Night_club',
							'value':'night_club'
						},
						{
							'name':'Painter',
							'value':'painter'
						},
						{
							'name':'Park',
							'value':'park'
						},
						{
							'name':'Parking',
							'value':'parking'
						},
						{
							'name':'Pet_store',
							'value':'pet_store'
						},
						{
							'name':'Pharmacy',
							'value':'pharmacy'
						},
						{
							'name':'Physiotherapist',
							'value':'physiotherapist'
						},
						{
							'name':'Place_of_worship',
							'value':'place_of_worship'
						},
						{
							'name':'Plumber',
							'value':'plumber'
						},
						{
							'name':'Police',
							'value':'police'
						},
						{
							'name':'Post_office',
							'value':'post_office'
						},
						{
							'name':'Real_estate_agency',
							'value':'real_estate_agency'
						},
						{
							'name':'Restaurant',
							'value':'restaurant'
						},
						{
							'name':'Roofing_contractor',
							'value':'roofing_contractor'
						},
						{
							'name':'Rv_park',
							'value':'rv_park'
						},
						{
							'name':'School',
							'value':'school'
						},
						{
							'name':'Shoe_store',
							'value':'shoe_store'
						},
						{
							'name':'Shopping_mall',
							'value':'shopping_mall'
						},
						{
							'name':'Spa',
							'value':'spa'
						},
						{
							'name':'Stadium',
							'value':'stadium'
						},
						{
							'name':'Storage',
							'value':'storage'
						},
						{
							'name':'Store',
							'value':'store'
						},
						{
							'name':'Subway_station',
							'value':'subway_station'
						},
						{
							'name':'Synagogue',
							'value':'synagogue'
						},
						{
							'name':'Taxi_stand',
							'value':'taxi_stand'
						},
						{
							'name':'Train_station',
							'value':'train_station'
						},
						{
							'name':'Transit_station',
							'value':'transit_station'
						},
						{
							'name':'Travel_agency',
							'value':'travel_agency'
						},
						{
							'name':'University',
							'value':'university'
						},
						{
							'name':'Veterinary_care',
							'value':'veterinary_care'
						},
						{
							'name':'Zoo',
							'value':'zoo'
						}
					]
				},
				{
					'n':'location',
					'r': true,
					't':'string',
					'p':'41.3851,2.1734'
				},
				{
					'n':'radius',
					'r': false,
					't':'string',
					'p':'250'
				}
			]
		},
		{
			'k':'check-mobile-alive',
			'd':'Check Mobile Is Alive',
			'ed':`Discover if a mobile number is switched on to call it later, with worldwide coverage.<br>Some carriers don't return if mobile is alive (like Vodafone)`,
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'get-mobile-country-code',
			'd':'Get Country ISO Code By Mobile',
			'ed':'Allow to get country code (two chars) of a mobile phone number with international format',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'get-mobile-country-prefix',
			'd':'Get Phone Prefix By Country ISO Code',
			'ed':'Allow to get country prefix number by country code (2 characters)',
			'g':'communication',
			'p': [
				{
					'n':'country',
					'r': true,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'check-mobile-exist',
			'd':'Check Mobile Exists',
			'ed': `Discover if mobile phone number exists in network operator, with worldwide coverage.<br>Get advanced mobile KPIs with <a href='/app/catalog/processor/get/mobile/lookup'>Mobile lookup</a> tool.`,
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'check-mobile-format',
			'd':'Check Mobile Has Valid Format',
			'ed':'Discover if mobile phone number has a valid format, with worldwide coverage',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34623123213'
				},
				{
					'n':'country',
					'r': true,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'check-mobile-format-es',
			'd':'Check Mobile Has Valid Format (ES)',
			'ed':'Discover if mobile phone number has a valid format (only Spain)',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'623123213'
				}
			]
		},
		{
			'k':'get-mobile-formatted',
			'd':'Get Formatted Mobile',
			'ed':'Format international mobile number by country ISO code (2 letters).',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				},
				{
					'n':'country',
					'r': false,
					't':'options',
					'p':'ES',
					'o': [
						{
							'name':'AD',
							'value':'AD'
						},
						{
							'name':'AE',
							'value':'AE'
						},
						{
							'name':'AF',
							'value':'AF'
						},
						{
							'name':'AG',
							'value':'AG'
						},
						{
							'name':'AI',
							'value':'AI'
						},
						{
							'name':'AL',
							'value':'AL'
						},
						{
							'name':'AM',
							'value':'AM'
						},
						{
							'name':'AO',
							'value':'AO'
						},
						{
							'name':'AQ',
							'value':'AQ'
						},
						{
							'name':'AR',
							'value':'AR'
						},
						{
							'name':'AS',
							'value':'AS'
						},
						{
							'name':'AT',
							'value':'AT'
						},
						{
							'name':'AU',
							'value':'AU'
						},
						{
							'name':'AW',
							'value':'AW'
						},
						{
							'name':'AX',
							'value':'AX'
						},
						{
							'name':'AZ',
							'value':'AZ'
						},
						{
							'name':'BA',
							'value':'BA'
						},
						{
							'name':'BB',
							'value':'BB'
						},
						{
							'name':'BD',
							'value':'BD'
						},
						{
							'name':'BE',
							'value':'BE'
						},
						{
							'name':'BF',
							'value':'BF'
						},
						{
							'name':'BG',
							'value':'BG'
						},
						{
							'name':'BH',
							'value':'BH'
						},
						{
							'name':'BI',
							'value':'BI'
						},
						{
							'name':'BJ',
							'value':'BJ'
						},
						{
							'name':'BL',
							'value':'BL'
						},
						{
							'name':'BM',
							'value':'BM'
						},
						{
							'name':'BN',
							'value':'BN'
						},
						{
							'name':'BO',
							'value':'BO'
						},
						{
							'name':'BQ',
							'value':'BQ'
						},
						{
							'name':'BR',
							'value':'BR'
						},
						{
							'name':'BS',
							'value':'BS'
						},
						{
							'name':'BT',
							'value':'BT'
						},
						{
							'name':'BV',
							'value':'BV'
						},
						{
							'name':'BW',
							'value':'BW'
						},
						{
							'name':'BY',
							'value':'BY'
						},
						{
							'name':'BZ',
							'value':'BZ'
						},
						{
							'name':'CA',
							'value':'CA'
						},
						{
							'name':'CC',
							'value':'CC'
						},
						{
							'name':'CD',
							'value':'CD'
						},
						{
							'name':'CF',
							'value':'CF'
						},
						{
							'name':'CG',
							'value':'CG'
						},
						{
							'name':'CH',
							'value':'CH'
						},
						{
							'name':'CI',
							'value':'CI'
						},
						{
							'name':'CK',
							'value':'CK'
						},
						{
							'name':'CL',
							'value':'CL'
						},
						{
							'name':'CM',
							'value':'CM'
						},
						{
							'name':'CN',
							'value':'CN'
						},
						{
							'name':'CO',
							'value':'CO'
						},
						{
							'name':'CR',
							'value':'CR'
						},
						{
							'name':'CU',
							'value':'CU'
						},
						{
							'name':'CV',
							'value':'CV'
						},
						{
							'name':'CW',
							'value':'CW'
						},
						{
							'name':'CX',
							'value':'CX'
						},
						{
							'name':'CY',
							'value':'CY'
						},
						{
							'name':'CZ',
							'value':'CZ'
						},
						{
							'name':'DE',
							'value':'DE'
						},
						{
							'name':'DJ',
							'value':'DJ'
						},
						{
							'name':'DK',
							'value':'DK'
						},
						{
							'name':'DM',
							'value':'DM'
						},
						{
							'name':'DO',
							'value':'DO'
						},
						{
							'name':'DZ',
							'value':'DZ'
						},
						{
							'name':'EC',
							'value':'EC'
						},
						{
							'name':'EE',
							'value':'EE'
						},
						{
							'name':'EG',
							'value':'EG'
						},
						{
							'name':'EH',
							'value':'EH'
						},
						{
							'name':'ER',
							'value':'ER'
						},
						{
							'name':'ES',
							'value':'ES'
						},
						{
							'name':'ET',
							'value':'ET'
						},
						{
							'name':'FI',
							'value':'FI'
						},
						{
							'name':'FJ',
							'value':'FJ'
						},
						{
							'name':'FK',
							'value':'FK'
						},
						{
							'name':'FM',
							'value':'FM'
						},
						{
							'name':'FO',
							'value':'FO'
						},
						{
							'name':'FR',
							'value':'FR'
						},
						{
							'name':'GA',
							'value':'GA'
						},
						{
							'name':'GB',
							'value':'GB'
						},
						{
							'name':'GD',
							'value':'GD'
						},
						{
							'name':'GE',
							'value':'GE'
						},
						{
							'name':'GF',
							'value':'GF'
						},
						{
							'name':'GG',
							'value':'GG'
						},
						{
							'name':'GH',
							'value':'GH'
						},
						{
							'name':'GI',
							'value':'GI'
						},
						{
							'name':'GL',
							'value':'GL'
						},
						{
							'name':'GM',
							'value':'GM'
						},
						{
							'name':'GN',
							'value':'GN'
						},
						{
							'name':'GP',
							'value':'GP'
						},
						{
							'name':'GQ',
							'value':'GQ'
						},
						{
							'name':'GR',
							'value':'GR'
						},
						{
							'name':'GS',
							'value':'GS'
						},
						{
							'name':'GT',
							'value':'GT'
						},
						{
							'name':'GU',
							'value':'GU'
						},
						{
							'name':'GW',
							'value':'GW'
						},
						{
							'name':'GY',
							'value':'GY'
						},
						{
							'name':'HK',
							'value':'HK'
						},
						{
							'name':'HM',
							'value':'HM'
						},
						{
							'name':'HN',
							'value':'HN'
						},
						{
							'name':'HR',
							'value':'HR'
						},
						{
							'name':'HT',
							'value':'HT'
						},
						{
							'name':'HU',
							'value':'HU'
						},
						{
							'name':'ID',
							'value':'ID'
						},
						{
							'name':'IE',
							'value':'IE'
						},
						{
							'name':'IL',
							'value':'IL'
						},
						{
							'name':'IM',
							'value':'IM'
						},
						{
							'name':'IN',
							'value':'IN'
						},
						{
							'name':'IO',
							'value':'IO'
						},
						{
							'name':'IQ',
							'value':'IQ'
						},
						{
							'name':'IR',
							'value':'IR'
						},
						{
							'name':'IS',
							'value':'IS'
						},
						{
							'name':'IT',
							'value':'IT'
						},
						{
							'name':'JE',
							'value':'JE'
						},
						{
							'name':'JM',
							'value':'JM'
						},
						{
							'name':'JO',
							'value':'JO'
						},
						{
							'name':'JP',
							'value':'JP'
						},
						{
							'name':'KE',
							'value':'KE'
						},
						{
							'name':'KG',
							'value':'KG'
						},
						{
							'name':'KH',
							'value':'KH'
						},
						{
							'name':'KI',
							'value':'KI'
						},
						{
							'name':'KM',
							'value':'KM'
						},
						{
							'name':'KN',
							'value':'KN'
						},
						{
							'name':'KP',
							'value':'KP'
						},
						{
							'name':'KR',
							'value':'KR'
						},
						{
							'name':'KW',
							'value':'KW'
						},
						{
							'name':'KY',
							'value':'KY'
						},
						{
							'name':'KZ',
							'value':'KZ'
						},
						{
							'name':'LA',
							'value':'LA'
						},
						{
							'name':'LB',
							'value':'LB'
						},
						{
							'name':'LC',
							'value':'LC'
						},
						{
							'name':'LI',
							'value':'LI'
						},
						{
							'name':'LK',
							'value':'LK'
						},
						{
							'name':'LR',
							'value':'LR'
						},
						{
							'name':'LS',
							'value':'LS'
						},
						{
							'name':'LT',
							'value':'LT'
						},
						{
							'name':'LU',
							'value':'LU'
						},
						{
							'name':'LV',
							'value':'LV'
						},
						{
							'name':'LY',
							'value':'LY'
						},
						{
							'name':'MA',
							'value':'MA'
						},
						{
							'name':'MC',
							'value':'MC'
						},
						{
							'name':'MD',
							'value':'MD'
						},
						{
							'name':'ME',
							'value':'ME'
						},
						{
							'name':'MF',
							'value':'MF'
						},
						{
							'name':'MG',
							'value':'MG'
						},
						{
							'name':'MH',
							'value':'MH'
						},
						{
							'name':'MK',
							'value':'MK'
						},
						{
							'name':'ML',
							'value':'ML'
						},
						{
							'name':'MM',
							'value':'MM'
						},
						{
							'name':'MN',
							'value':'MN'
						},
						{
							'name':'MO',
							'value':'MO'
						},
						{
							'name':'MP',
							'value':'MP'
						},
						{
							'name':'MQ',
							'value':'MQ'
						},
						{
							'name':'MR',
							'value':'MR'
						},
						{
							'name':'MS',
							'value':'MS'
						},
						{
							'name':'MT',
							'value':'MT'
						},
						{
							'name':'MU',
							'value':'MU'
						},
						{
							'name':'MV',
							'value':'MV'
						},
						{
							'name':'MW',
							'value':'MW'
						},
						{
							'name':'MX',
							'value':'MX'
						},
						{
							'name':'MY',
							'value':'MY'
						},
						{
							'name':'MZ',
							'value':'MZ'
						},
						{
							'name':'NA',
							'value':'NA'
						},
						{
							'name':'NC',
							'value':'NC'
						},
						{
							'name':'NE',
							'value':'NE'
						},
						{
							'name':'NF',
							'value':'NF'
						},
						{
							'name':'NG',
							'value':'NG'
						},
						{
							'name':'NI',
							'value':'NI'
						},
						{
							'name':'NL',
							'value':'NL'
						},
						{
							'name':'NO',
							'value':'NO'
						},
						{
							'name':'NP',
							'value':'NP'
						},
						{
							'name':'NR',
							'value':'NR'
						},
						{
							'name':'NU',
							'value':'NU'
						},
						{
							'name':'NZ',
							'value':'NZ'
						},
						{
							'name':'OM',
							'value':'OM'
						},
						{
							'name':'PA',
							'value':'PA'
						},
						{
							'name':'PE',
							'value':'PE'
						},
						{
							'name':'PF',
							'value':'PF'
						},
						{
							'name':'PG',
							'value':'PG'
						},
						{
							'name':'PH',
							'value':'PH'
						},
						{
							'name':'PK',
							'value':'PK'
						},
						{
							'name':'PL',
							'value':'PL'
						},
						{
							'name':'PM',
							'value':'PM'
						},
						{
							'name':'PN',
							'value':'PN'
						},
						{
							'name':'PR',
							'value':'PR'
						},
						{
							'name':'PS',
							'value':'PS'
						},
						{
							'name':'PT',
							'value':'PT'
						},
						{
							'name':'PW',
							'value':'PW'
						},
						{
							'name':'PY',
							'value':'PY'
						},
						{
							'name':'QA',
							'value':'QA'
						},
						{
							'name':'RE',
							'value':'RE'
						},
						{
							'name':'RO',
							'value':'RO'
						},
						{
							'name':'RS',
							'value':'RS'
						},
						{
							'name':'RU',
							'value':'RU'
						},
						{
							'name':'RW',
							'value':'RW'
						},
						{
							'name':'SA',
							'value':'SA'
						},
						{
							'name':'SB',
							'value':'SB'
						},
						{
							'name':'SC',
							'value':'SC'
						},
						{
							'name':'SD',
							'value':'SD'
						},
						{
							'name':'SE',
							'value':'SE'
						},
						{
							'name':'SG',
							'value':'SG'
						},
						{
							'name':'SH',
							'value':'SH'
						},
						{
							'name':'SI',
							'value':'SI'
						},
						{
							'name':'SJ',
							'value':'SJ'
						},
						{
							'name':'SK',
							'value':'SK'
						},
						{
							'name':'SL',
							'value':'SL'
						},
						{
							'name':'SM',
							'value':'SM'
						},
						{
							'name':'SN',
							'value':'SN'
						},
						{
							'name':'SO',
							'value':'SO'
						},
						{
							'name':'SR',
							'value':'SR'
						},
						{
							'name':'SS',
							'value':'SS'
						},
						{
							'name':'ST',
							'value':'ST'
						},
						{
							'name':'SV',
							'value':'SV'
						},
						{
							'name':'SX',
							'value':'SX'
						},
						{
							'name':'SY',
							'value':'SY'
						},
						{
							'name':'SZ',
							'value':'SZ'
						},
						{
							'name':'TC',
							'value':'TC'
						},
						{
							'name':'TD',
							'value':'TD'
						},
						{
							'name':'TF',
							'value':'TF'
						},
						{
							'name':'TG',
							'value':'TG'
						},
						{
							'name':'TH',
							'value':'TH'
						},
						{
							'name':'TJ',
							'value':'TJ'
						},
						{
							'name':'TK',
							'value':'TK'
						},
						{
							'name':'TL',
							'value':'TL'
						},
						{
							'name':'TM',
							'value':'TM'
						},
						{
							'name':'TN',
							'value':'TN'
						},
						{
							'name':'TO',
							'value':'TO'
						},
						{
							'name':'TR',
							'value':'TR'
						},
						{
							'name':'TT',
							'value':'TT'
						},
						{
							'name':'TV',
							'value':'TV'
						},
						{
							'name':'TW',
							'value':'TW'
						},
						{
							'name':'TZ',
							'value':'TZ'
						},
						{
							'name':'UA',
							'value':'UA'
						},
						{
							'name':'UG',
							'value':'UG'
						},
						{
							'name':'UM',
							'value':'UM'
						},
						{
							'name':'US',
							'value':'US'
						},
						{
							'name':'UY',
							'value':'UY'
						},
						{
							'name':'UZ',
							'value':'UZ'
						},
						{
							'name':'VA',
							'value':'VA'
						},
						{
							'name':'VC',
							'value':'VC'
						},
						{
							'name':'VE',
							'value':'VE'
						},
						{
							'name':'VG',
							'value':'VG'
						},
						{
							'name':'VI',
							'value':'VI'
						},
						{
							'name':'VN',
							'value':'VN'
						},
						{
							'name':'VU',
							'value':'VU'
						},
						{
							'name':'WF',
							'value':'WF'
						},
						{
							'name':'WS',
							'value':'WS'
						},
						{
							'name':'YE',
							'value':'YE'
						},
						{
							'name':'YT',
							'value':'YT'
						},
						{
							'name':'ZA',
							'value':'ZA'
						},
						{
							'name':'ZM',
							'value':'ZM'
						},
						{
							'name':'ZW',
							'value':'ZW'
						}
					]
				}
			]
		},
		{
			'k':'get-mobile-hlr-lookup',
			'd':'Get HLR Mobile Lookup',
			'ed':'Discover if mobile exist via real time [HLR](https://en.wikipedia.org/wiki/Home_location_register) query',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'check-mobile-imei',
			'd':'Check Imei Is Valid',
			'ed':'Discover if Imei number has a valid format',
			'g':'communication',
			'p': [
				{
					'n':'imei',
					'r': true,
					't':'string',
					'p':'490154203237518'
				}
			]
		},
		{
			'k':'get-mobile-lookup',
			'd':'Get Mobile Lookup',
			'ed':'Discover if mobile exist via real time [HLR](https://en.wikipedia.org/wiki/Home_location_register) query, as well as portability and roaming data',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'get-mobile-mnp-lookup',
			'd':'Get Mobile Portability Lookup',
			'ed':'Get existence, portability and roaming of a mobile phone, via [MNP](https://en.wikipedia.org/wiki/Mobile_number_portability) query',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'get-mobile-normalized',
			'd':'Get Normalized Mobile',
			'ed':'Allow to normalize a mobile phone, removing non allowed characters',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34 62318 2 770'
				},
				{
					'n':'country',
					'r': false,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-mobile-or-phone-lookup-es',
			'd':'Get Mobile/Landline Lookup (Spain)',
			'ed':'Discover if mobile or landline prefix exists on Spain.',
			'g':'communication',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'get-mobile-or-phone-mnp-es',
			'd':'Get Landline/Mobile Portability Lookup (ES)',
			'ed':'Get portability data about a landline or mobile number, only for Spain',
			'g':'communication',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'605281220'
				}
			]
		},
		{
			'k':'check-mobile-sms',
			'd':'Check Mobile Supports Sms',
			'ed':'Discover if a mobile number can receive sms, with worldwide coverage',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'check-mobile-valid-prefix',
			'd':'Check Mobile Has Valid Prefix',
			'ed':'Discover if mobile phone number has a valid prefix, with worldwide coverage',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'check-mobile-valid-prefix-es',
			'd':'Check Mobile Has Valid Prefix (ES)',
			'ed':'Discover if spanish mobile phone number has a valid prefix',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'605281220'
				}
			]
		},
		{
			'k':'get-name-by-prefix',
			'd':'Get Name By Prefix (ES)',
			'ed':'Get first personal name matching by prefix and gender from INE data source (only Spain)',
			'g':'personal',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Marce'
				},
				{
					'n':'gender',
					'r': false,
					't':'options',
					'p':'male',
					'o': [
						{
							'name':'Female',
							'value':'female'
						},
						{
							'name':'Male',
							'value':'male'
						}
					]
				}
			]
		},
		{
			'k':'check-name-exist',
			'd':'Check Name Exists (ES)',
			'ed':'Check if a personal name exists in INE data source (only Spain)',
			'g':'personal',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Juan'
				}
			]
		},
		{
			'k':'get-name-list-by-prefix',
			'd':'Get Names By Prefix',
			'ed':'Get multiple personal names by prefix',
			'g':'geographic',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Marce'
				},
				{
					'n':'gender',
					'r': false,
					't':'options',
					'p':'male',
					'o': [
						{
							'name':'Female',
							'value':'female'
						},
						{
							'name':'Male',
							'value':'male'
						}
					]
				}
			]
		},
		{
			'k':'get-name-normalized',
			'd':'Get Normalized Name',
			'ed':'Normalize name removing non allowed characters',
			'g':'personal',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'M4rc'
				}
			]
		},
		{
			'k':'check-name-valid',
			'd':'Check Name Has Valid Format',
			'ed':'Check if name contains accepted characters',
			'g':'personal',
			'p': [
				{
					'n':'name',
					'r': true,
					't':'string',
					'p':'Gonzalez'
				}
			]
		},
		{
			'k':'get-net-aton',
			'd':'Get Number By IP',
			'ed':'Convert an IP address to numeric notation',
			'g':'internet',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'62.12.22.11'
				}
			]
		},
		{
			'k':'get-net-by-ip',
			'd':'Get Network By IP',
			'ed':'Discover network data by ipv4 or ipv6 address',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'check-url-contains',
			'd':'Check URL Contains',
			'ed':'Check if an URL contains string or regular expression (case insensitive)',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://uproc.io'
				},
				{
					'n':'regex',
					'r': true,
					't':'string',
					'p':'uProc'
				}
			]
		},
		{
			'k':'get-url-contents',
			'd':'Get Contents From URL',
			'ed':'Get text data from web, pdf or image (png, jpg, gif), allowing to filter some elements by regular expressions or field names (email, phone, zipcode).<br><br>Learn about regular expressions on [Wikipedia](https://en.wikipedia.org/wiki/Regular_expression)',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://docs.uproc.io/pdf/resumen_del_servicio_EN.pdf'
				},
				{
					'n':'selector',
					'r': false,
					't':'string',
					'p':'emails'
				}
			]
		},
		{
			'k':'get-url-decode',
			'd':'Get Decoded URL',
			'ed':'Decode URL to recover original',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https%3A%2F%2Fgoogle.es'
				}
			]
		},
		{
			'k':'get-url-encode',
			'd':'Get Encoded URL',
			'ed':'Encode URL to avoid problems',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'http://google.com'
				}
			]
		},
		{
			'k':'check-url-exist',
			'd':'Check URL Exists',
			'ed':'Check if an URL exists',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'http://www.google.com'
				}
			]
		},
		{
			'k':'get-net-fixip',
			'd':'Get Fixed IP',
			'ed':'Fix an IP address to the right format',
			'g':'internet',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'212169160147'
				}
			]
		},
		{
			'k':'check-net-host-alive',
			'd':'Check Host Is Up',
			'ed':'Discover if a computer is switched on',
			'g':'internet',
			'p': [
				{
					'n':'host',
					'r': true,
					't':'string',
					'p':'www.google.es'
				}
			]
		},
		{
			'k':'check-string-ip',
			'd':'Check IP Has Valid Format',
			'ed':'Check if IPv4 or IPv6 address has a valid format',
			'g':'text',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'23.45.57.123'
				}
			]
		},
		{
			'k':'check-string-ip4',
			'd':'Check IPv4 Has Valid Format',
			'ed':'Check if IPv4 address has a valid format',
			'g':'text',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'127.0.0.1'
				}
			]
		},
		{
			'k':'check-string-ip6',
			'd':'Check IPv6 Has Valid Format',
			'ed':'Check if IPv6 address has a valid format',
			'g':'text',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'2a01:c50e:3544:bd00:4df0:7609:251a:f6d0'
				}
			]
		},
		{
			'k':'get-net-ntoa',
			'd':'Get IP By Number',
			'ed':'Convert a number to an IP address',
			'g':'internet',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'1501706957'
				}
			]
		},
		{
			'k':'get-url-parsed',
			'd':'Get Parsed URL',
			'ed':'Decode URL into multiple fields',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://docs.uproc.io/pdf/resumen_del_servicio_EN.pdf'
				}
			]
		},
		{
			'k':'get-net-scan',
			'd':'Get Opened Ports In Host',
			'ed':'Scan a host and returns most common open ports: 21, 22, 23, 25, 53, 80, 110, 143, 443, 3306, 27017',
			'g':'internet',
			'p': [
				{
					'n':'host',
					'r': true,
					't':'string',
					'p':'google.es'
				}
			]
		},
		{
			'k':'check-net-service-up',
			'd':'Check Service Is Up',
			'ed':'Discover if a service in a port is available',
			'g':'internet',
			'p': [
				{
					'n':'host',
					'r': true,
					't':'string',
					'p':'www.google.com'
				},
				{
					'n':'port',
					'r': true,
					't':'string',
					'p':'80'
				}
			]
		},
		{
			'k':'get-url-tables',
			'd':'Get Table From URL',
			'ed':'Get data from existing table in	HTML page (by table number) or in a PDF file (by table column number) in CSV format (columns delimited by ;)',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2'
				},
				{
					'n':'table',
					'r': false,
					't':'string',
					'p':'3'
				}
			]
		},
		{
			'k':'check-url-valid',
			'd':'Check URL Is Valid',
			'ed':'Check that an URL has a valid format',
			'g':'internet',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'http://www.google.com'
				}
			]
		},
		{
			'k':'check-number-betw',
			'd':'Check Number Is Between',
			'ed':'Check if number is between two values',
			'p': [
				{
					'n':'number1',
					'r': true,
					't':'string',
					'p':'23'
				},
				{
					'n':'number2',
					'r': true,
					't':'string',
					'p':'21'
				},
				{
					'n':'number3',
					'r': true,
					't':'string',
					'p':'24'
				}
			]
		},
		{
			'k':'check-number-decimal',
			'd':'Check Decimal Number Is Valid',
			'ed':'Check if value is a decimal number',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'0.23'
				}
			]
		},
		{
			'k':'check-number-eq',
			'd':'Check Number Is Equal',
			'ed':'Check if number is equal to another',
			'p': [
				{
					'n':'number1',
					'r': true,
					't':'string',
					'p':'23'
				},
				{
					'n':'number2',
					'r': true,
					't':'string',
					'p':'23'
				}
			]
		},
		{
			'k':'check-number-even',
			'd':'Check Even Number Is Valid',
			'ed':'Check if number is even',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'2'
				}
			]
		},
		{
			'k':'check-number-ge',
			'd':'Check Number Is Greater Or Equal',
			'ed':'Check if number is greater or equal than another',
			'p': [
				{
					'n':'number1',
					'r': true,
					't':'string',
					'p':'23'
				},
				{
					'n':'number2',
					'r': true,
					't':'string',
					'p':'23'
				}
			]
		},
		{
			'k':'check-number-gt',
			'd':'Check Number Is Greater',
			'ed':'Check if number is greater than another',
			'p': [
				{
					'n':'number1',
					'r': true,
					't':'string',
					'p':'23'
				},
				{
					'n':'number2',
					'r': true,
					't':'string',
					'p':'22'
				}
			]
		},
		{
			'k':'check-number-le',
			'd':'Check Number Is Lower Or Equal',
			'ed':'Check if number is lower or equal than another',
			'p': [
				{
					'n':'number1',
					'r': true,
					't':'string',
					'p':'23'
				},
				{
					'n':'number2',
					'r': true,
					't':'string',
					'p':'23'
				}
			]
		},
		{
			'k':'check-number-lt',
			'd':'Check Number Is Lower',
			'ed':'Check if number is lower than another',
			'p': [
				{
					'n':'number1',
					'r': true,
					't':'string',
					'p':'22'
				},
				{
					'n':'number2',
					'r': true,
					't':'string',
					'p':'23'
				}
			]
		},
		{
			'k':'check-number-luhn',
			'd':'Check Luhn Number Is Valid',
			'ed':'Check if it a valid Luhn number',
			'g':'security',
			'p': [
				{
					'n':'luhn',
					'r': true,
					't':'string',
					'p':'79927398713'
				}
			]
		},
		{
			'k':'check-number-mod',
			'd':'Check Modulus Is Equals',
			'ed':'Check if modulus between two numbers is equal to a value',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'10'
				},
				{
					'n':'mod',
					'r': true,
					't':'string',
					'p':'2'
				},
				{
					'n':'rest',
					'r': true,
					't':'string',
					'p':'0'
				}
			]
		},
		{
			'k':'check-number-natural',
			'd':'Check Natural Number Is Valid',
			'ed':'Check if value is a natural number',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'0'
				}
			]
		},
		{
			'k':'check-string-numeric',
			'd':'Check Numeric String Is Valid',
			'ed':'Check if string length contains only numbers',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'123'
				}
			]
		},
		{
			'k':'check-number-odd',
			'd':'Check Odd Number Is Valid',
			'ed':'Check if number is odd',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'3'
				}
			]
		},
		{
			'k':'check-number-prime',
			'd':'Check Prime Number Is Valid',
			'ed':'Check if number is prime',
			'p': [
				{
					'n':'number',
					'r': true,
					't':'string',
					'p':'11'
				}
			]
		},
		{
			'k':'check-password-strong',
			'd':'Check Password Is Strong',
			'ed':'Check is password is sure and contains a lowercase, uppercase, numbers, special characters and have a minimum length of four characters',
			'g':'security',
			'p': [
				{
					'n':'password',
					'r': true,
					't':'string',
					'p':'1agdA*$#'
				}
			]
		},
		{
			'k':'get-person-by-email',
			'd':'Get Person By Email',
			'ed':'Get personal data by email',
			'g':'personal',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				}
			]
		},
		{
			'k':'get-person-by-firstname-lastname-company-location',
			'd':'Get Person By Firstname, Lastname, Company And Location',
			'ed':'Get personal data by firstname, lastname, company and location',
			'g':'personal',
			'p': [
				{
					'n':'firstname',
					'r': true,
					't':'string',
					'p':'Miquel'
				},
				{
					'n':'lastname',
					'r': true,
					't':'string',
					'p':'Colomer'
				},
				{
					'n':'company',
					'r': false,
					't':'string',
					'p':'uProc'
				},
				{
					'n':'location',
					'r': false,
					't':'string',
					'p':'Barcelona'
				}
			]
		},
		{
			'k':'get-person-by-mobile',
			'd':'Get Person By Mobile',
			'ed':'Get personal data by mobile',
			'g':'personal',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'send-person-email-to-list',
			'd':`Send Email's Contact To List`,
			'ed':'Add a contact email to a person list',
			'g':'personal',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				},
				{
					'n':'list',
					'r': false,
					't':'string',
					'p':'my-list'
				}
			]
		},
		{
			'k':'get-person-extended-by-email',
			'd':'Get Person (Extended) By Email',
			'ed':`Get prospect's contact data and company's location and social data by email`,
			'g':'personal',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				}
			]
		},
		{
			'k':'get-person-extended-by-email-and-company',
			'd':'Get Person (Extended) By Email And Company',
			'ed':'Get contact, location and social data by email and company name and location',
			'g':'personal',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				},
				{
					'n':'company',
					'r': false,
					't':'string',
					'p':'uProc'
				}
			]
		},
		{
			'k':'get-person-faked-data',
			'd':'Get Random Person Data',
			'ed':'Generates random fake data',
			'g':'personal',
			'p': [
				{
					'n':'locality',
					'r': true,
					't':'options',
					'p':'English',
					'o': [
						{
							'name':'Australia (English)',
							'value':'Australia (English)'
						},
						{
							'name':'Australia Ocker (English)',
							'value':'Australia Ocker (English)'
						},
						{
							'name':'Azerbaijani',
							'value':'Azerbaijani'
						},
						{
							'name':'Bork (English)',
							'value':'Bork (English)'
						},
						{
							'name':'Canada (English)',
							'value':'Canada (English)'
						},
						{
							'name':'Canada (French)',
							'value':'Canada (French)'
						},
						{
							'name':'Chinese',
							'value':'Chinese'
						},
						{
							'name':'Chinese (Taiwan)',
							'value':'Chinese (Taiwan)'
						},
						{
							'name':'Czech',
							'value':'Czech'
						},
						{
							'name':'Dutch',
							'value':'Dutch'
						},
						{
							'name':'English',
							'value':'English'
						},
						{
							'name':'Farsi',
							'value':'Farsi'
						},
						{
							'name':'French',
							'value':'French'
						},
						{
							'name':'Georgian',
							'value':'Georgian'
						},
						{
							'name':'German',
							'value':'German'
						},
						{
							'name':'German (Austria)',
							'value':'German (Austria)'
						},
						{
							'name':'German (Switzerland)',
							'value':'German (Switzerland)'
						},
						{
							'name':'Great Britain (English)',
							'value':'Great Britain (English)'
						},
						{
							'name':'India (English)',
							'value':'India (English)'
						},
						{
							'name':'Indonesia',
							'value':'Indonesia'
						},
						{
							'name':'Ireland (English)',
							'value':'Ireland (English)'
						},
						{
							'name':'Italian',
							'value':'Italian'
						},
						{
							'name':'Japanese',
							'value':'Japanese'
						},
						{
							'name':'Korean',
							'value':'Korean'
						},
						{
							'name':'Nepalese',
							'value':'Nepalese'
						},
						{
							'name':'Norwegian',
							'value':'Norwegian'
						},
						{
							'name':'Polish',
							'value':'Polish'
						},
						{
							'name':'Portuguese (Brazil)',
							'value':'Portuguese (Brazil)'
						},
						{
							'name':'Russian',
							'value':'Russian'
						},
						{
							'name':'Slovakian',
							'value':'Slovakian'
						},
						{
							'name':'Spanish',
							'value':'Spanish'
						},
						{
							'name':'Spanish Mexico',
							'value':'Spanish Mexico'
						},
						{
							'name':'Swedish',
							'value':'Swedish'
						},
						{
							'name':'Turkish',
							'value':'Turkish'
						},
						{
							'name':'Ukrainian',
							'value':'Ukrainian'
						},
						{
							'name':'United States (English)',
							'value':'United States (English)'
						},
						{
							'name':'Vietnamese',
							'value':'Vietnamese'
						}
					]
				}
			]
		},
		{
			'k':'get-profile-by-employee-data',
			'd':'Get LinkedIn URI By First, Last And Company',
			'ed':'Get LinkedIn employee profile URI by firstname, lastname and company without manual search on Google or LinkedIn.<br><br>This tool uses search engines (Bing and Google) through proxies',
			'g':'personal',
			'p': [
				{
					'n':'firstname',
					'r': true,
					't':'string',
					'p':'Miquel'
				},
				{
					'n':'lastname',
					'r': true,
					't':'string',
					'p':'Colomer'
				},
				{
					'n':'company',
					'r': true,
					't':'string',
					'p':'uProc'
				}
			]
		},
		{
			'k':'get-surname-by-prefix',
			'd':'Get Surname By Prefix (ES)',
			'ed':'Get first personal surname matching by prefix from INE data source (only Spain)',
			'g':'personal',
			'p': [
				{
					'n':'surname',
					'r': true,
					't':'string',
					'p':'Col'
				}
			]
		},
		{
			'k':'check-surname-exist',
			'd':'Check Surname Is Valid (ES)',
			'ed':'Check if a personal surname appears in INE data source (only Spain)',
			'g':'personal',
			'p': [
				{
					'n':'surname',
					'r': true,
					't':'string',
					'p':'Gonzalez'
				}
			]
		},
		{
			'k':'get-profile-linkedin-by-email',
			'd':'Get LinkedIn URI By Email',
			'ed':'Get LinkedIn employee profile URI by <strong>business email</strong>.<br><br>This tool uses search engines (Bing and Google) through proxies',
			'g':'personal',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				}
			]
		},
		{
			'k':'get-surname-list-by-prefix',
			'd':'Get Surnames By Prefix (ES)',
			'ed':'Get personal surnames matching by prefix from INE data source (only Spain)',
			'g':'personal',
			'p': [
				{
					'n':'surname',
					'r': true,
					't':'string',
					'p':'Co'
				}
			]
		},
		{
			'k':'get-surname-normalized',
			'd':'Get Normalized Surname',
			'ed':'Normalize surname',
			'g':'personal',
			'p': [
				{
					'n':'surname',
					'r': true,
					't':'string',
					'p':'C0lomer'
				}
			]
		},
		{
			'k':'get-profile-twitter-by-employee-data',
			'd':'Get Twitter URI By First, Last And Company',
			'ed':'Get Twitter profile by firstname, lastname and company without manual search on Google or Twitter.<br><br>This tool uses search engines (Bing and Google) through proxies',
			'g':'personal',
			'p': [
				{
					'n':'firstname',
					'r': true,
					't':'string',
					'p':'Carlos'
				},
				{
					'n':'lastname',
					'r': true,
					't':'string',
					'p':'Blanco'
				},
				{
					'n':'company',
					'r': true,
					't':'string',
					'p':'Encomenda'
				}
			]
		},
		{
			'k':'check-surname-valid',
			'd':'Check Surname Has Valid Format',
			'ed':'Check if surname contains accepted characters',
			'g':'personal',
			'p': [
				{
					'n':'surname',
					'r': true,
					't':'string',
					'p':'Gonzalez'
				}
			]
		},
		{
			'k':'get-profile-xing-by-employee-data',
			'd':'Get Xing URI By First, Last And Company',
			'ed':'Get Xing profile by firstname, lastname and company without manual search on Google or Xing.<br><br>This tool uses search engines (Bing and Google) through proxies',
			'g':'personal',
			'p': [
				{
					'n':'firstname',
					'r': true,
					't':'string',
					'p':'David'
				},
				{
					'n':'lastname',
					'r': true,
					't':'string',
					'p':'Tomás'
				},
				{
					'n':'company',
					'r': true,
					't':'string',
					'p':'Cyberclick'
				}
			]
		},
		{
			'k':'check-phone-exist',
			'd':'Check Phone Exists',
			'ed':'Discover if landline number exists in network operator, with worldwide support',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'34932187670'
				}
			]
		},
		{
			'k':'check-phone-format',
			'd':'Check Valid Phone Format By Country',
			'ed':'Allow to discover if landline number has a good international format, depending on country',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'34932187670'
				},
				{
					'n':'region',
					'r': true,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'check-phone-format-es',
			'd':'Check Valid Phone Format (ES)',
			'ed':'Discover if landline phone number is valid, with Spain coverage',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'932187670'
				}
			]
		},
		{
			'k':'get-phone-lookup',
			'd':'Get Landline Phone Lookup',
			'ed':'Discover if landline phone number exists, the network operator and the country',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'34932187670'
				},
				{
					'n':'country',
					'r': false,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-phone-normalized',
			'd':'Get Cleaned Phone',
			'ed':'Clean a phone removing non allowed characters',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'3493218 767o'
				},
				{
					'n':'country',
					'r': false,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'check-phone-or-mobile-exist',
			'd':'Check Phone Or Mobile Exists',
			'ed':'Discover if landline or mobile number exists in network operator',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'34932187670'
				},
				{
					'n':'country',
					'r': false,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'check-phone-or-mobile-valid',
			'd':'Check Phone Or Mobile Valid',
			'ed':'Discover if landline or mobile number has a valid prefix',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'34932187670'
				},
				{
					'n':'country',
					'r': false,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-phone-parsed',
			'd':'Get Parsed And Validated Phone',
			'ed':'Parse phone number in multiple fields and verify format and prefix validity (phone existence is not checked).',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'34932187670'
				}
			]
		},
		{
			'k':'check-phone-valid-prefix',
			'd':'Check Valid Phone Prefix',
			'ed':'Discover if a landline phone number prefix exists, with worldwide coverage',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'932187670'
				}
			]
		},
		{
			'k':'get-province-by-ip',
			'd':'Get Province By IP',
			'ed':'Discover the province name from an IP address',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-province-by-name',
			'd':'Get Province By Name (ES)',
			'ed':'You can get the first province by a name prefix (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'province',
					'r': true,
					't':'string',
					'p':'B'
				}
			]
		},
		{
			'k':'get-province-by-phone',
			'd':'Get Province By Phone (ES)',
			'ed':'Discover the province name from a landline phone number (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'932'
				}
			]
		},
		{
			'k':'get-province-by-zipcode',
			'd':'Get Province By Zipcode (ES)',
			'ed':'Discover the province name from a zipcode number (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'08'
				}
			]
		},
		{
			'k':'get-province-list-by-name',
			'd':'Get Provinces By Name (ES)',
			'ed':'You can get a province list by a name prefix (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'province',
					'r': true,
					't':'string',
					'p':'B'
				}
			]
		},
		{
			'k':'get-province-list-by-phone',
			'd':'Get Provinces By Phone (ES)',
			'ed':'You can get a province list by a phone prefix (only Spain)',
			'g':'geographic',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'932'
				}
			]
		},
		{
			'k':'get-province-list-by-zipcode',
			'd':'Get Provinces By Zipcode (ES)',
			'ed':'You can get a province list by a zipcode prefix, only for Spain',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'0'
				}
			]
		},
		{
			'k':'get-province-normalized',
			'd':'Get Normalized Province',
			'ed':'Allow to normalize a province, removing non allowed characters',
			'g':'geographic',
			'p': [
				{
					'n':'province',
					'r': true,
					't':'string',
					'p':'Barce lona'
				}
			]
		},
		{
			'k':'check-robinson-email-exist',
			'd':'Check Email Is Robinson (ES)',
			'ed':'Discover if an email exists in the Robinson list (only Spain)',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'manzaned@uvigo.es'
				}
			]
		},
		{
			'k':'check-robinson-nif-exist',
			'd':'Check Nif Number Is Robinson (ES)',
			'ed':'Discover if an nif exists in the Robinson list (only Spain)',
			'g':'personal',
			'p': [
				{
					'n':'nif',
					'r': true,
					't':'string',
					'p':'00002206K'
				}
			]
		},
		{
			'k':'check-robinson-phone-exist',
			'd':'Check Phone Is Robinson (ES)',
			'ed':'Discover if a phone (landline or mobile) exists in a Robinson list (only Spain)',
			'g':'communication',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'917156252'
				}
			]
		},
		{
			'k':'get-sentiment-by-text',
			'd':'Get Sentiment From A Text',
			'ed':'It allows to analyze an english text with Emojis and detect sentiment',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'I am very happy'
				}
			]
		},
		{
			'k':'check-social-domain-exist',
			'd':'Check Domain Has Social Activity',
			'ed':'Discover if a domain has social network presence',
			'g':'communication',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'cyberclick.es'
				}
			]
		},
		{
			'k':'get-social-domain-lookup',
			'd':'Get Social Networks By Domain',
			'ed':'Discover if a domain or a website has social activity and returns all social network profiles found',
			'g':'communication',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'cyberclick.es'
				}
			]
		},
		{
			'k':'get-social-domain-parsed',
			'd':'Get Social Networks Activity By Domain',
			'ed':'Search all social networks by domain, parses all found urls and returns social networks kpis (if data available)',
			'g':'communication',
			'p': [
				{
					'n':'domain',
					'r': true,
					't':'string',
					'p':'cyberclick.es'
				}
			]
		},
		{
			'k':'check-social-email-exist',
			'd':'Check Email Has Social Activity',
			'ed':'Discover if the email has social network presence',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'mcolomer@gmail.com'
				}
			]
		},
		{
			'k':'get-social-email-lookup',
			'd':'Get Social Networks By Email',
			'ed':'Discover if an email has social activity, and get all social network profiles found',
			'g':'communication',
			'p': [
				{
					'n':'email',
					'r': true,
					't':'string',
					'p':'miquel@uproc.io'
				}
			]
		},
		{
			'k':'check-social-mobile-exist',
			'd':'Check Mobile Has Social Activity',
			'ed':'Discover if the mobile phone has social network presence',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'get-social-mobile-lookup',
			'd':'Get Social Networks By Mobile',
			'ed':'Discover if an mobile phone has social activity, and get all social network profiles found',
			'g':'communication',
			'p': [
				{
					'n':'mobile',
					'r': true,
					't':'string',
					'p':'34605281220'
				}
			]
		},
		{
			'k':'get-social-uri-parsed',
			'd':'Get Social Network Activity',
			'ed':'This tools parses a social uri address and extracts any available indicators',
			'g':'communication',
			'p': [
				{
					'n':'url',
					'r': true,
					't':'string',
					'p':'https://www.facebook.com/uprocdataquality'
				}
			]
		},
		{
			'k':'check-string-alpha',
			'd':'Check Alphabetic String Is Valid',
			'ed':'Check if string length contains only letters',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'asc'
				}
			]
		},
		{
			'k':'check-string-alphanumeric',
			'd':'Check Alphanumeric String Is',
			'ed':'Check if string length contains only numbers and letters',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'aa11'
				}
			]
		},
		{
			'k':'get-string-base64',
			'd':'Get BASE64 Value',
			'ed':'Convert a string to a BASE64 encoded value',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				}
			]
		},
		{
			'k':'check-string-blank',
			'd':'Check String Is Empty',
			'ed':'Check if string has no content',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':''
				}
			]
		},
		{
			'k':'check-string-boolean',
			'd':'Check Boolean String Is Valid',
			'ed':'Check if string is true or false',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'true'
				}
			]
		},
		{
			'k':'get-string-by-format',
			'd':'Get Formatted String By Pattern',
			'ed':'It allows to format a string using a format pattern',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'1122'
				},
				{
					'n':'format',
					'r': true,
					't':'string',
					'p':'%09d'
				}
			]
		},
		{
			'k':'get-string-by-regex',
			'd':'Get Generated Text By Pattern',
			'ed':'Generate a random string using a regular expression as a pattern',
			'g':'text',
			'p': [
				{
					'n':'regex',
					'r': true,
					't':'string',
					'p':'[0-9]{,2}-[a-zA-Z]{2,3}-[A-Z]{2,5}-[0-9]{2}-[a-z]*'
				}
			]
		},
		{
			'k':'check-string-contains',
			'd':'Check String Contains Char',
			'ed':'Check if string contains a character',
			'g':'text',
			'p': [
				{
					'n':'text1',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'text2',
					'r': true,
					't':'string',
					'p':'t'
				}
			]
		},
		{
			'k':'check-string-ends',
			'd':'Check String Ends With',
			'ed':'Check if string ends with a character',
			'g':'text',
			'p': [
				{
					'n':'text1',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'text2',
					'r': true,
					't':'string',
					'p':'t'
				}
			]
		},
		{
			'k':'get-string-field-name',
			'd':'Get Field Type By Value',
			'ed':'Get field name, analyzing field value provided.<br><br>Supported values: Email, Domain, Isbn, Ean, Upc, Dni, Nie, Cif, Date, Gender (male, female), Landline, Mobile phone, Zip code, Web address',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'myemail@mydomain.com'
				}
			]
		},
		{
			'k':'get-string-join',
			'd':'Get Merged Values By Text',
			'ed':'Join a character or string to join two values',
			'g':'text',
			'p': [
				{
					'n':'text1',
					'r': true,
					't':'string',
					'p':'hi'
				},
				{
					'n':'text2',
					'r': true,
					't':'string',
					'p':'good morning!'
				},
				{
					'n':'glue',
					'r': true,
					't':'string',
					'p':','
				}
			]
		},
		{
			'k':'get-string-length',
			'd':'Get String Length',
			'ed':'Get length of a string',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi, Mike!'
				}
			]
		},
		{
			'k':'check-string-length-betw',
			'd':'Check String Length Is Between',
			'ed':'Check if string length is between two numbers',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'length1',
					'r': true,
					't':'string',
					'p':'3'
				},
				{
					'n':'length2',
					'r': true,
					't':'string',
					'p':'5'
				}
			]
		},
		{
			'k':'check-string-length-eq',
			'd':'Check String Length Is Equal',
			'ed':'Check if string length is equal to number',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'4'
				}
			]
		},
		{
			'k':'check-string-length-ge',
			'd':'Check String Length Is Greater Or Equal',
			'ed':'Check if string length is greater or equal than number',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'4'
				}
			]
		},
		{
			'k':'check-string-length-gt',
			'd':'Check String Length Is Greater',
			'ed':'Check if string length is greater than number',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'3'
				}
			]
		},
		{
			'k':'check-string-length-le',
			'd':'Check String Length Is Lower Or Equal',
			'ed':'Check if string length is lower or equal than number',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'4'
				}
			]
		},
		{
			'k':'check-string-length-lt',
			'd':'Check String Length Is Lower',
			'ed':'Check if string length is lower than number',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'length',
					'r': true,
					't':'string',
					'p':'5'
				}
			]
		},
		{
			'k':'check-string-lowercase',
			'd':'Check Text Is Lowercased',
			'ed':'Check if string only contains lowercase characters',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'aaa'
				}
			]
		},
		{
			'k':'get-string-lowercase',
			'd':'Get Lowercased Text',
			'ed':'Convert all letters found in a string to lowercase',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi, Mike!'
				}
			]
		},
		{
			'k':'get-string-md5',
			'd':'Get MD5 String',
			'ed':'Convert a string to a MD5 encoded value',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				}
			]
		},
		{
			'k':'get-string-normalized',
			'd':'Get Normalized String By Field',
			'ed':'Normalize a string depending on the field name',
			'g':'text',
			'p': [
				{
					'n':'field',
					'r': true,
					't':'options',
					'p':'name',
					'o': [
						{
							'name':'Alphabetic',
							'value':'alphabetic'
						},
						{
							'name':'Alphanumeric',
							'value':'alphanumeric'
						},
						{
							'name':'Cif',
							'value':'cif'
						},
						{
							'name':'City',
							'value':'city'
						},
						{
							'name':'Country',
							'value':'country'
						},
						{
							'name':'Date',
							'value':'date'
						},
						{
							'name':'Decimal',
							'value':'decimal'
						},
						{
							'name':'Dni',
							'value':'dni'
						},
						{
							'name':'Domain',
							'value':'domain'
						},
						{
							'name':'Email',
							'value':'email'
						},
						{
							'name':'Gender',
							'value':'gender'
						},
						{
							'name':'Integer',
							'value':'integer'
						},
						{
							'name':'Ip',
							'value':'ip'
						},
						{
							'name':'Mobile',
							'value':'mobile'
						},
						{
							'name':'Name',
							'value':'name'
						},
						{
							'name':'Nie',
							'value':'nie'
						},
						{
							'name':'Nif',
							'value':'nif'
						},
						{
							'name':'Phone',
							'value':'phone'
						},
						{
							'name':'Province',
							'value':'province'
						},
						{
							'name':'Zipcode',
							'value':'zipcode'
						}
					]
				},
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'JMª Gº.Fco.gtez. Gro.'
				}
			]
		},
		{
			'k':'get-string-parsed',
			'd':'Get Parsed Text',
			'ed':'Analyze string and return all emails, phones, zipcodes and links detected',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'My email is miquel@uproc.io and my phone is 34605281220'
				}
			]
		},
		{
			'k':'check-string-random',
			'd':'Check String Is Random',
			'ed':'Check if string contains random characters without sense',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'t2 chhsdfitoixcv'
				}
			]
		},
		{
			'k':'check-string-regex',
			'd':'Check String Is Valid By Pattern',
			'ed':'Check if string contains a value that matches with a regular expression',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'regex',
					'r': true,
					't':'string',
					'p':'^test$'
				}
			]
		},
		{
			'k':'get-string-replace-all',
			'd':'Get Texts Replaced By String',
			'ed':'Replace all values found in a string by another',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi, good morning!'
				},
				{
					'n':'find',
					'r': true,
					't':'string',
					'p':'o'
				},
				{
					'n':'replace',
					'r': true,
					't':'string',
					'p':'u'
				}
			]
		},
		{
			'k':'get-string-replace-first',
			'd':'Get Text Replaced By String',
			'ed':'Replace first value found in a string by another',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi, good morning!'
				},
				{
					'n':'find',
					'r': true,
					't':'string',
					'p':'o'
				},
				{
					'n':'replace',
					'r': true,
					't':'string',
					'p':'u'
				}
			]
		},
		{
			'k':'get-string-sha',
			'd':'Get SHA String',
			'ed':'Convert a string to a SHA encoded value',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'test'
				}
			]
		},
		{
			'k':'get-string-split',
			'd':'Get Splitted Values By Separator',
			'ed':'Split a value in two parts, using a separator present in the original string',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Texto largo, separado por coma'
				},
				{
					'n':'separator',
					'r': true,
					't':'string',
					'p':','
				}
			]
		},
		{
			'k':'get-string-split-and-join',
			'd':'Get Splitted And Merged Values By Separator',
			'ed':'Split a value in two parts and join them, using a separator present in the original string',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi, good morning!'
				},
				{
					'n':'separator',
					'r': true,
					't':'string',
					'p':','
				},
				{
					'n':'glue',
					'r': true,
					't':'string',
					'p':';'
				}
			]
		},
		{
			'k':'check-string-starts',
			'd':'Check String Starts With',
			'ed':'Check if string starts with a character',
			'g':'text',
			'p': [
				{
					'n':'text1',
					'r': true,
					't':'string',
					'p':'test'
				},
				{
					'n':'text2',
					'r': true,
					't':'string',
					'p':'t'
				}
			]
		},
		{
			'k':'get-string-translated',
			'd':'Get Translated Text',
			'ed':'It allows to translate a text to any language',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi, my name is Mike'
				},
				{
					'n':'language',
					'r': true,
					't':'options',
					'p':'Spanish',
					'o': [
						{
							'name':'Afrikaans',
							'value':'Afrikaans'
						},
						{
							'name':'Albanian',
							'value':'Albanian'
						},
						{
							'name':'Amharic',
							'value':'Amharic'
						},
						{
							'name':'Arabic',
							'value':'Arabic'
						},
						{
							'name':'Armenian',
							'value':'Armenian'
						},
						{
							'name':'Azeerbaijani',
							'value':'Azeerbaijani'
						},
						{
							'name':'Basque',
							'value':'Basque'
						},
						{
							'name':'Belarusian',
							'value':'Belarusian'
						},
						{
							'name':'Bengali',
							'value':'Bengali'
						},
						{
							'name':'Bosnian',
							'value':'Bosnian'
						},
						{
							'name':'Bulgarian',
							'value':'Bulgarian'
						},
						{
							'name':'Catalan',
							'value':'Catalan'
						},
						{
							'name':'Cebuano',
							'value':'Cebuano'
						},
						{
							'name':'Chinese (Simplified)',
							'value':'Chinese (Simplified)'
						},
						{
							'name':'Chinese (Traditional)',
							'value':'Chinese (Traditional)'
						},
						{
							'name':'Corsican',
							'value':'Corsican'
						},
						{
							'name':'Croatian',
							'value':'Croatian'
						},
						{
							'name':'Czech',
							'value':'Czech'
						},
						{
							'name':'Danish',
							'value':'Danish'
						},
						{
							'name':'Dutch',
							'value':'Dutch'
						},
						{
							'name':'English',
							'value':'English'
						},
						{
							'name':'Esperanto',
							'value':'Esperanto'
						},
						{
							'name':'Estonian',
							'value':'Estonian'
						},
						{
							'name':'Finnish',
							'value':'Finnish'
						},
						{
							'name':'French',
							'value':'French'
						},
						{
							'name':'Frisian',
							'value':'Frisian'
						},
						{
							'name':'Galician',
							'value':'Galician'
						},
						{
							'name':'Georgian',
							'value':'Georgian'
						},
						{
							'name':'German',
							'value':'German'
						},
						{
							'name':'Greek',
							'value':'Greek'
						},
						{
							'name':'Gujarati',
							'value':'Gujarati'
						},
						{
							'name':'Haitian Creole',
							'value':'Haitian Creole'
						},
						{
							'name':'Hausa',
							'value':'Hausa'
						},
						{
							'name':'Hawaiian',
							'value':'Hawaiian'
						},
						{
							'name':'Hebrew',
							'value':'Hebrew'
						},
						{
							'name':'Hindi',
							'value':'Hindi'
						},
						{
							'name':'Hmong',
							'value':'Hmong'
						},
						{
							'name':'Hungarian',
							'value':'Hungarian'
						},
						{
							'name':'Icelandic',
							'value':'Icelandic'
						},
						{
							'name':'Igbo',
							'value':'Igbo'
						},
						{
							'name':'Indonesian',
							'value':'Indonesian'
						},
						{
							'name':'Irish',
							'value':'Irish'
						},
						{
							'name':'Italian',
							'value':'Italian'
						},
						{
							'name':'Japanese',
							'value':'Japanese'
						},
						{
							'name':'Javanese',
							'value':'Javanese'
						},
						{
							'name':'Kannada',
							'value':'Kannada'
						},
						{
							'name':'Kazakh',
							'value':'Kazakh'
						},
						{
							'name':'Khmer',
							'value':'Khmer'
						},
						{
							'name':'Korean',
							'value':'Korean'
						},
						{
							'name':'Kurdish',
							'value':'Kurdish'
						},
						{
							'name':'Kyrgyz',
							'value':'Kyrgyz'
						},
						{
							'name':'Lao',
							'value':'Lao'
						},
						{
							'name':'Latin',
							'value':'Latin'
						},
						{
							'name':'Latvian',
							'value':'Latvian'
						},
						{
							'name':'Lithuanian',
							'value':'Lithuanian'
						},
						{
							'name':'Luxembourgish',
							'value':'Luxembourgish'
						},
						{
							'name':'Macedonian',
							'value':'Macedonian'
						},
						{
							'name':'Malagasy',
							'value':'Malagasy'
						},
						{
							'name':'Malay',
							'value':'Malay'
						},
						{
							'name':'Malayalam',
							'value':'Malayalam'
						},
						{
							'name':'Maltese',
							'value':'Maltese'
						},
						{
							'name':'Maori',
							'value':'Maori'
						},
						{
							'name':'Marathi',
							'value':'Marathi'
						},
						{
							'name':'Mongolian',
							'value':'Mongolian'
						},
						{
							'name':'Myanmar (Burmese)',
							'value':'Myanmar (Burmese)'
						},
						{
							'name':'Nepali',
							'value':'Nepali'
						},
						{
							'name':'Norwegian',
							'value':'Norwegian'
						},
						{
							'name':'Nyanja (Chichewa)',
							'value':'Nyanja (Chichewa)'
						},
						{
							'name':'Pashto',
							'value':'Pashto'
						},
						{
							'name':'Persian',
							'value':'Persian'
						},
						{
							'name':'Polish',
							'value':'Polish'
						},
						{
							'name':'Portuguese (Portugal, Brazil)',
							'value':'Portuguese (Portugal, Brazil)'
						},
						{
							'name':'Punjabi',
							'value':'Punjabi'
						},
						{
							'name':'Romanian',
							'value':'Romanian'
						},
						{
							'name':'Russian',
							'value':'Russian'
						},
						{
							'name':'Samoan',
							'value':'Samoan'
						},
						{
							'name':'Scots Gaelic',
							'value':'Scots Gaelic'
						},
						{
							'name':'Serbian',
							'value':'Serbian'
						},
						{
							'name':'Sesotho',
							'value':'Sesotho'
						},
						{
							'name':'Shona',
							'value':'Shona'
						},
						{
							'name':'Sindhi',
							'value':'Sindhi'
						},
						{
							'name':'Sinhala (Sinhalese)',
							'value':'Sinhala (Sinhalese)'
						},
						{
							'name':'Slovak',
							'value':'Slovak'
						},
						{
							'name':'Slovenian',
							'value':'Slovenian'
						},
						{
							'name':'Somali',
							'value':'Somali'
						},
						{
							'name':'Spanish',
							'value':'Spanish'
						},
						{
							'name':'Sundanese',
							'value':'Sundanese'
						},
						{
							'name':'Swahili',
							'value':'Swahili'
						},
						{
							'name':'Swedish',
							'value':'Swedish'
						},
						{
							'name':'Tagalog (Filipino)',
							'value':'Tagalog (Filipino)'
						},
						{
							'name':'Tajik',
							'value':'Tajik'
						},
						{
							'name':'Tamil',
							'value':'Tamil'
						},
						{
							'name':'Telugu',
							'value':'Telugu'
						},
						{
							'name':'Thai',
							'value':'Thai'
						},
						{
							'name':'Turkish',
							'value':'Turkish'
						},
						{
							'name':'Ukrainian',
							'value':'Ukrainian'
						},
						{
							'name':'Urdu',
							'value':'Urdu'
						},
						{
							'name':'Uzbek',
							'value':'Uzbek'
						},
						{
							'name':'Vietnamese',
							'value':'Vietnamese'
						},
						{
							'name':'Welsh',
							'value':'Welsh'
						},
						{
							'name':'Xhosa',
							'value':'Xhosa'
						},
						{
							'name':'Yiddish',
							'value':'Yiddish'
						},
						{
							'name':'Yoruba',
							'value':'Yoruba'
						},
						{
							'name':'Zulu',
							'value':'Zulu'
						}
					]
				}
			]
		},
		{
			'k':'check-string-uppercase',
			'd':'Check Text Is Uppercased',
			'ed':'Check if string only contains uppercase characters',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'AAA'
				}
			]
		},
		{
			'k':'get-string-uppercase',
			'd':'Get Uppercased Text',
			'ed':'Convert all letters found in a string to uppercase',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'Hi, Mike!'
				}
			]
		},
		{
			'k':'get-string-vlookup',
			'd':'Get String VLookup',
			'ed':'Lookup string between multiple values by fuzzy logic and regex patterns',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'s4mple'
				},
				{
					'n':'texts',
					'r': true,
					't':'string',
					'p':'sample,samples'
				}
			]
		},
		{
			'k':'get-vat-by-address',
			'd':'Get VAT% By Address',
			'ed':'Get country VAT by address',
			'g':'finance',
			'p': [
				{
					'n':'address',
					'r': true,
					't':'string',
					'p':'Mallorca, 120 España'
				}
			]
		},
		{
			'k':'get-vat-by-coordinates',
			'd':'Get VAT% By Coordinates',
			'ed':'Get country VAT by coordinates',
			'g':'finance',
			'p': [
				{
					'n':'coordinates',
					'r': true,
					't':'string',
					'p':'41.61921,2.2904413'
				}
			]
		},
		{
			'k':'get-vat-by-ip',
			'd':'Get VAT% By IP',
			'ed':'Get VAT by IP address',
			'g':'finance',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-vat-by-isocode',
			'd':'Get VAT% By ISO Code',
			'ed':'Get VAT value by country ISO code',
			'g':'finance',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'ES'
				}
			]
		},
		{
			'k':'get-vat-by-number',
			'd':'Get Data By TIN (VIES)',
			'ed':'Get related european TIN number in Europe',
			'g':'finance',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'ES'
				},
				{
					'n':'tin',
					'r': true,
					't':'string',
					'p':'44016116G'
				}
			]
		},
		{
			'k':'get-vat-by-phone',
			'd':'Get VAT% By Phone',
			'ed':'Get VAT by phone number, with worldwide coverage',
			'g':'finance',
			'p': [
				{
					'n':'phone',
					'r': true,
					't':'string',
					'p':'57122000111'
				}
			]
		},
		{
			'k':'get-vat-by-zipcode',
			'd':'Get VAT% By Zipcode',
			'ed':'Get VAT by zipcode',
			'g':'finance',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'08012'
				}
			]
		},
		{
			'k':'check-vat-exist',
			'd':'Check TIN Exists (VIES)',
			'ed':'Check if TIN number exists in Europe',
			'g':'finance',
			'p': [
				{
					'n':'isocode',
					'r': true,
					't':'string',
					'p':'ES'
				},
				{
					'n':'tin',
					'r': true,
					't':'string',
					'p':'44016116G'
				}
			]
		},
		{
			'k':'get-word-clean-abuse',
			'd':'Get Text Cleaned Without Abuse Words',
			'ed':'Clean abuse words from a string',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'comentario de un maldito personaje'
				}
			]
		},
		{
			'k':'get-word-count',
			'd':'Get Words Count',
			'ed':'Count total words in a text',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'sample text'
				}
			]
		},
		{
			'k':'check-word-count-betw',
			'd':'Check Word Count Between',
			'ed':'Check if the number of words in a sentence is between two determined quantities',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'sample text'
				},
				{
					'n':'count1',
					'r': true,
					't':'string',
					'p':'1'
				},
				{
					'n':'count2',
					'r': true,
					't':'string',
					'p':'2'
				}
			]
		},
		{
			'k':'check-word-count-eq',
			'd':'Check Word Count Equal',
			'ed':'Check if the number of words in a sentence equals a certain amount',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'sample text'
				},
				{
					'n':'count',
					'r': true,
					't':'string',
					'p':'2'
				}
			]
		},
		{
			'k':'check-word-count-ge',
			'd':'Check Word Count Greater Or Equal',
			'ed':'Check if the number of words in a sentence is greater than or equal to a certain amount',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'sample text'
				},
				{
					'n':'count',
					'r': true,
					't':'string',
					'p':'2'
				}
			]
		},
		{
			'k':'check-word-count-gt',
			'd':'Check Word Count Greater',
			'ed':'Check if the number of words in a sentence is greater than a certain amount',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'sample text'
				},
				{
					'n':'count',
					'r': true,
					't':'string',
					'p':'1'
				}
			]
		},
		{
			'k':'check-word-count-le',
			'd':'Check Word Count Lower Or Equal',
			'ed':'Check if the number of words present in a sentence is less than or equal to a quantity',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'sample text'
				},
				{
					'n':'count',
					'r': true,
					't':'string',
					'p':'2'
				}
			]
		},
		{
			'k':'check-word-count-lt',
			'd':'Check Word Count Lower',
			'ed':'',
			'g':'text',
			'p': [
				{
					'n':'text',
					'r': true,
					't':'string',
					'p':'sample text'
				},
				{
					'n':'count',
					'r': true,
					't':'string',
					'p':'3'
				}
			]
		},
		{
			'k':'get-zipcode-by-ip',
			'd':'Get Zipcode By IP',
			'ed':'Discover the zipcode if you have an IP address',
			'g':'geographic',
			'p': [
				{
					'n':'ip',
					'r': true,
					't':'string',
					'p':'95.23.100.79'
				}
			]
		},
		{
			'k':'get-zipcode-by-prefix',
			'd':'Get Zipcode By Prefix (ES)',
			'ed':'Get first zipcode by prefix, only for Spain',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'080'
				}
			]
		},
		{
			'k':'check-zipcode-exist',
			'd':'Check Zipcode By Prefix Exists (ES)',
			'ed':'Discover if a zipcode number prefix exists, only for Spain',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'08012'
				}
			]
		},
		{
			'k':'check-zipcode-format',
			'd':'Check Zipcode Has Valid Format (ES)',
			'ed':'Discover if a zipcode number has a valid format, only for Spain',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'08012'
				}
			]
		},
		{
			'k':'get-zipcode-list-by-prefix',
			'd':'Get Zipcodes By Prefix (ES)',
			'ed':'Get multiple zipcodes by prefix, with worldwide coverage',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'080'
				}
			]
		},
		{
			'k':'get-zipcode-normalized',
			'd':'Get Normalized Zipcode',
			'ed':'Allow to normalize a zipcode, removing non allowed characters',
			'g':'geographic',
			'p': [
				{
					'n':'zipcode',
					'r': true,
					't':'string',
					'p':'08i 12'
				}
			]
		}
	],
};
