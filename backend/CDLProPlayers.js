const users = [
  {
    id: 0,
    name: 'Scumpi',
    role: 'Sub',
    imageUrl:
      'https://pbs.twimg.com/profile_images/734543457470062592/FjRYkyZ4_400x400.jpg',
    color: 'green',
  },

  {
    id: 1,
    name: 'Nadeshot',
    role: 'Flex',
    imageUrl:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhASEBIQFRUSFxAQFRAQEBAQEBAQFRIWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi4lHyUrLS4tLSstLS0tLS0tLS0tLS0tLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAECAwQGBwj/xABIEAABAwIDBAUHCQUIAQUAAAABAAIDBBEFEiEGMUFREyJhcZEHIzJSgaGxFEJyc5Kys8HRFRYkM4IlNENTdIPh8LRUYmOiwv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EAC4RAAICAQQCAQMDAwUBAAAAAAABAhEDBBIhMUFRMhMiUhRhoTOBsRVxkdHwBf/aAAwDAQACEQMRAD8A6WAfxEv1bPi5BfJAPPVvefxHI7CPPyfVt+JQXyRjz1b3u/EcvO0vbO/U9Hpy8H8pY/tGp/2vw2r3heF+Uxv9o1H+1+G1d7OJHIkKmd+W3fZaHkC1+KrniuEITRneqJWXCvk3LO2ptwVojjyU9E7kVHo3cj4Le3EAOCmzEwD6KLl6K2w9g7o3cj4JdG7kfBGBi7T8z4Kf7YA9GMEnnayLl6DZD2A+jPI+CRYeRRKprXvOlmjcGtHHvWCXtJPbdUr8mbrwV5SlZOCRuK0xV7277OHJzR8UAq8mWyVkYjxKIjVlj3AhRfWQngPsqdz9Gv04/kCE6JOqouQ8FWZ4+Q8Ebn6J2L2YElqfIzl7lAvanYtq9lIScpSEcFBMkSkkEwQISSchMEAJJKySYH0Yweff9W34lBfJMPPVv0nfiOR0N8876sfeQfyVNtNW/Sf+I5eTpfkepqfiejrw7ylj+0Z+6L8ML3JeI+Utv9oT90X3Au+RxR7OHxCMlunA3UaWXM3XeNFtcFm6PKT2oT4oJLkzP3lZ3U5J0Vs8mU3U469o3hack1F9sqkwyQAEC9+Sh+zpfVKJQ4vGN4Pgt37egIsAQbckrkPZD2Ao4bA37vbZRJAuRwG/t0/VSnmF3Dtv43/VRdGSNB/3/oVpmLRAS2OnAEDvO8qt5vYKZgdvsU0dM9xsAb8u1OwpkSRrZVlaH0Mo3sd4FRdSyDex3gUrQ9rKFNkZO4EqNlrw2ZrXHMSLhDHFWzP0LvVPgm6J3I+CMurGesqX1beDlG5+jR417BfRnkfBINK3Oqf/AHKhzxzTslwXspEZUSFbn7VU5UiGh2J3iyYi1lY4XCBELKKkwpPCAGSTJkAfSgHnnfV/mhHkvbaWt+nJ+I5Gg3zx+h+aGeTZlpaz6yT8Vy8nTP7z1dR8DvF4X5WJSzEJHcLRXH9AXui8U8qVOJK6YH1YrdnUC9CTOKKt8HItcHC4WaoUaKNzC9p4J6k6IrkHyZJmZlnbSOPJb44wVvgpGaaqt9C+k2A3YbL6pVb4Cw2cLHku0iaNBdDMUpRJURxjiBc9/HwRGbbCeHarCOw2yIqPPyjzYNmtI9Mjee5eiw7OUzRpE3wWrCqZkUUbGCzWtaAOyyINWc5WbQhSBX7Egtbo2W5ZQmbgcDdRGy/cEYsolZM1QGmwyM/Mb4BYqrD2EWyt8F0T2ofULGdo3hyeZ7U7MCxkiFiLktG53/K4cjh7F7diUQynuK8grhkmJtude3tXTpsjkmmceqxJNSXkxdC7kfBLoncj4LrTKB80eAVbqlvq/Ba/V/Yy+gzlch5HwTWXSyVTfV9wQ02BOipTIeJoHZDyUSERMgWOZtySqTslwaEBdvclCeCjE+2/iluKZAzhYqzenmbxUIjwSAbo0lbZJAH0nl89/QfvBD/J+20lX9ZL+K5FcvnP6D8QsGwjLPqfrJfxCvK0/wDUPVzfA69eN+Ugfx830YvuL2VeOeUkfx0v0YvurvydHJj7OMn3FDpxcEIjUbihhdqnEmYNc1wO8pnPeOLvEogAr42A2BAV7jNRfsECok9Z3iV1myEXSOa52psd+/0jb4KbaGGw6jUY2XpvPta0ANy++6lZEy9jXk7+kOgvyC2BzeYXHbUT1BLKemsCes954Dg380HqsEqo2hxxANdb0XOygd2qx4Ornwj0rOE2cLyigxCrjeM1SJBxaDf2helUsBfGH33i6hv0aKPFsvnnaBq4IVU4pTs9KRniF59tVUyvmfGJXANJHV33WTDsNw8i9TUuzHS2Ytse3RG1NWxOTi+DtX4rDOHCNwOXQjiO3uXme0kGSV3abo27DWQSNkpZC9vHrXBbxBUdqKTP0R9Ytb4lGKoT46Ys1zx89o5c18nNRNa/mjztn2dviqKfBmOvmzCxsurfA4qn7Axqn81H5Q5HJcEjAOrkPFA3mU1KLE1MxGYpjIVuFC0cSU/yVvJO0TUgcr6hugKtqoQBoNyjF1mkck78k0NEbhUbipwOsbKVS3ijyA+YJLOknQj6laAXggggtOo1B1CybHx2dUdr5D/9yvKMB2jqKMjo3Zm7jG8ktt2cl6TsLtJBO5zSRHI67sjiLEk36p4rzseJxyJnozncDtl495SR/Gy/Ri+6vYV5D5SR/Gy/Qi+6unJ0YYuzhZzoVLBaSOWaNrwSC4AhUzHUoc+SSNwdG4gg3FuBScXKLSZUZxjK5Kz1o7KUX+UPFQqtk6TIckdiNbgleZu2jr7fzX+AVY2rrR/jO8AvMjodWn/U/wAnW9Xp/wAf4O9jw2K24+KJ4HSxslGUeJuvJhjdR/mOXpWymLB0dMwxHMWseZhqXEmzi7lrddyxzxtOTIc8eVNQQdxigmeHdDYOItnduaOa46s2Fc/KXznPZwe5zS8vub6a6cl6jSuBCvMKuKrlEumqaODwzZOMEHJuAG6wNhbMeR46LsKaPIwtbuAsPBXVcrImkmwA48lzmH7Z00wf0Rvl0JII9uql0uzRW6oHSYOySSVxbcvNzzuOfYhldsjHLJnLHX6ujHAMOUADS2mgRXAdpIKmZ+Q8QCLEDfoV2PRDgog5Iqai+1Z5/hexhicX3IBN8mhFlVtFQ3dCxmpD2kDdwJ/Jd9WvIbovO9pZXukjax2VzibO5dUqHe8qltBVTUOYXNcNW6FYnVttbb0HxSoljkey56uUG+tzlBPvusRrJOa6o4nVnJPNjTaoPyV9wRZDjJbch/yp/NN8ocrWNoyllg/BudMVAzlY+mcm6RxVbWZucTU+a4KzRSZSpC6g9hG9WkRJrwJx1vzVxdmCeRnUBHBNSu4IJKMhSW1JLcPadC0K6MWNx4jeohqd1Sxrg1xsTr2LlbO6KO42a24ngysnvLHuuT51o7D872obt1iMVRUOliJLS1guRY3A10QRjxvBv3KMt3lrBvcQ0X3XKjc3wytiXIBmfqqZF1VRsFW306M9z1Wdha31WfbV/qMX5IweDI/BzDFZFG240Hguh/ceuHzG/bCnHsVXDXo2/bCHqMX5IawZPRkbAy3oN8Auv2Tcx0ErQAHxa6aXjJLgPHMhn7tVYH8vwcFPZ0PhqOu0hr2uidfcL7ie4gKVkjLyaKE4+DvaKTQLeZFymB4oCAxxs5vVPI20BWjH8QdHGCw6kge4lVdFR5N2PSxdE5rybH1Tr3rig6DKY2x5bXLrCx00ueZ1Siqp53EdDIRoMzyGMsLbr79Qi7DURNOSmvfk6N2vPfdQ7kdMIv2c1ghhiqNdBfNpoL8C7mvTqera9vVIK84xUTXzGmbc8Lsza/RKx4ZitTG9ukjBuLH2IcOYKXPYpxrhno+JT9UrgKhwfXMG/o2PktzNwAPeiuPY0GsFj1jY27Oa5TCKxxlnkdq4tEYPBpJufgPFJJu5ESkk0i2rhY973FrSSSSbLEyjj16jd/JErBUxt3rVNnK1bswT0UYB6jfBDm0zD80I5VjquQiNXGTM5L9it1Kz1QmbC1u4BXlRKq2TRUWrNWx3bfkthUHtuCFSfIpLgw0huCFn9F3cpwnK/wBynWs1BWnkz8F2cdiSwXST2i3HcNahuKxvJJa0nQaouwJ4964d1Oz0VyCtnC7rg30tvRB0gZJG525rmuPcDqtQaAdANVixVtgUfJik9qO2/fejBsXEd7XfopfvvQbzKPsu/ReWSKsBc3+l4vbH+tn6R6n+/NAb+eHvVrdtaHT+IZ7SvJzSsPDwUo6KO+73pP8A+Xh/JjWtn6R603bGh/8AUR/aC53Fsco+kJZM0h2vVN7FcucIgtcgj+qyxTQ0bTqSexpvqqxaDHF2mxvWzXhB5uKRmU9G+4dqDf0TfUf95ro6CrMrQyVwN3AtPIcR7l5/gogkqYYwxwa8uYXF/WF2OsRbcb2RWtklon9HIS5t7skGgcPyOq6546VGMMt22ep9HcWaOFtNyA4jh1dfzdw3vb+aF4Rt4xjWtIud172tYBG6jauNwuHDdoL63UbWuzohl9FcOFVIbeTf3gk+Cw4u5jGecFnDVotxUMR2zayMlpubb78VwWJ4/LUOu4m/IXSjicnYsmo28M2YtXZrP4kAW91lGhlYxmr25jdzteJWBkLrOe/eGmw5ab+9CARxHtuuhY1JUczzOEt1HUvq2W9MeKqdUjg4eK56EMJ69wOY1t7FujooD/jD2iyPopeQ/VN+DeakesPFVmYc2+IVMmCgDMH39ipGFk/O9yNsfYPNL0aHS9oVZl7VWcLPre5QOGu9YJqK9k/Vfotc/tVDpDzUm4ceLvBXijaOarhEOTfgGvOquiBcHA8loqKUBptvCpoXakK74MvJmylJE+jHJJLeLYdY0KLzZSCqmK46s9C6JGXcq8V1aVQ5ylVvu32LSEaMcsrAo1SNhvWWary6N38+CxSSk7zddCjZzuQQkrgPRF+3gsjqyT1rd2izpKlFE7mWyVDnek4nvN1WXJikqJCOzrrVVMf/AJGDxNvzXqGNUTZWkEA9/cvKcIcBPTk/5sX3wvY2DMy/Erl1HaOzTdM84xDZ6xOTTs4Ic7DagaX3dp/Reg1EYzG6pqKEWuAslmaNvoRZwJw1/wA93hcrVSUgbuH6oxWRjgoUkFyqeRtBHCkzJWtyxyfRd8Fyy6zaI5YyOei5Na4PjZhqvlQk6ZJbHKXQzuZ6JI7OHgt1Pifrj2t/RDEkOKY02jomStcLtIKZyARyFpuDZEqStzdV2/geBWThXRop2aymKcplJRFwQk9R/cUXKH4gzUHnotI+jOZf0w5p0Lukq2oncdhDi0b3Na2/WvY2VsxQbB6B4ka5wIABOvPkjFSVztJPg6021yYa55DDbsQarqn2y5jqjUljoVztW4Oe4jdew7hotILkynLiiopJk62MBJFMkUAOUkydACaSNRvGo7CvXNncVbNEx44ixHFrx6TT7fiF5EiOCYu+lfmbq0+kzg7t7CsskNyNcWTY+T1iuha7XnwQeqZM27WnQ894VOHbRQzt9LKfVO9PPioHzmlcTjJPo9KE4vpg+eAt37ytMDAxtzvWGoxJpN3HQckDxjHTJ1Y9BuvxWkccpcETzRjyV7Q14kdladGm5PAnkg6SS7IxUVSPOnJylbEkknsmQIJJBJMBJBJJABKmqyRrqean8q7EPgvezRc8lcY5PVKyceTeMlRp+WDkqqqYObayhFTPN7i3erTRm28I6Fw0D0ls+QnmElpvRltOxusNY5ai5YawrlijrkwdVTWa49nvQVb8RfoBz18FgXTFcHLJ2xkkimTJHSCZPdACUwy4uoIpSRgxkJoTBaSnK2xsooGMrm1Ug+cfbqqSmSAskmc7eSq0kkAJJJOgBJJFOgBikkUyAHSSSKAJwPyuaeRCOXQBGqd12tPYFE0XBliiU6YqSxk6ZJAgzn0WSpKse5YZKoHcoRrywXiR63s/NZForjdx7gs66F0c0uxkk6ZAhJJJIAcopRN0394QwC6LYe24/wC6qkTIoxWKxB5hD0YxHrDuQiyGCYxTJymSKEkknSASSdJMBinSKZADJ0ySQDpkk6AGRXD3XYOy4QpEMPJynv8AyUy6Kh2bUxVZeUxeVBrTLUlT0hSQKgnI5BG7+KKSSKpr0qKUqA0xu4qCd5uSfamWyMG7YkkrJJiGSSSSAsh3olACG6X0QuM6hFYCqRMuyMkt9/vVtLgMk1PWVDHMApBG5zDfO8PJALewWKjUR21XV+TTEWRftEOfGwvpZCx0uXIZWG7BZ2h1du4psS7KqLZKCKrp45CZmvNI85hlY+OeOfSwPB0Q4onDszSSR0JbCwObIx0wAIM0D5XxG5B1s4M8UOrdso/4OYDpp+ghbIACwMqYpC6O+mou9+jeduKzUWIYrG6mkFMbwsmjHSWj6Zsjw9wcHEbnAHRItK+hVWyVO7O6J8oMUtM2aI5cvRTSZM0bt4trv5Ik7Y+iEuXo6gkCsAgdNaScw5S2VjgNAdRuI1QqXaZsLJ2SwTMqJnwmQHL0TYmTulBZrcnrEctBqtL9vIDI4ubOW9NPI03jztglpnRGMAu0OZ2a17aIAqi2ZonMzyGtpy6pFGI3iOR0L3xtczpNAbdbeOBC5PFqB1NNNA8guicWEjc625w7xY+1dRQ4tQdFJA6eraHTU9U2WeISyZ4wA5pyO5NaAUC2rxJlVV1E8YOSRzS3MLEgMa25HC9roYAlMpJkgGSSSSAdJJJACWilJsVnWmhjDiRcjTglJcFwdMuJKiXq/wCSjmVA0o5n3LOjZzXoo6TtSV3yQcz7kk6RO9miRyrL9Hdx+CUxWeV9mnwVUZtmMJJJKyBJEpJIAZJJJIBwiVM4kgC5J0DWguJPIAakqjCA0zRB7Q5rnBpa70SXdUX9pBXqWz1W3oQYWRRG3WMMMcTj2ZwL+9ZZc6xK2jp0+jlqH9rSr2A8O2Oq5G55g2nZoLznzmtyB0Lbvvod4G4ojHsTRssXPqZSeAMcEZ56Wc7lxC6egYMkglvH0jQ6PMWtdJKxriGtDtX6F17LXQDO12VrSDo8ua12WJ0M4vc+j1+iNxyXLLU5ZSSXFp/wdsdHgxxk2921rrrk5A4DA1lT8mpmseyMPZIHSSSg9I0OAe9xyktJtltuNkKc+N0MbLu6SJrp/QHRmOeVkeUOvfMDGTutqje2ZcykklF/My0NRYaXDZHNN+fptQB8HRzSs5RzsH0Y6iKRnuL1eKTniUpPlpmsqxZ3GCpJxf8AZ8G/DKcGWlbII3sld6EkbJA0Zi0gZwcvA6c0sL6USxxODR14g6MMhawtJaTcAZbZde5DK+vnig6VgAMTmAPLQ4FmZ2Zpabi4MjCDYHtsrsBnHQ0cruDWsd3QSllvsBivlQTTLUoz1M4Sirp/88tf9GjFKZgllY6npnEPc1o+SwgkE+bsWAE3BbbXiFVi+FU8cuUUkTWuEbm5hUNJDo2E/PG5xI7FsqIBFVtjB0ifTMFt1oo4hp9hc9szO6Sn67nOLJj6RLiBLE08eF4nIuW2Tvpi2Yfq4YOC+6PP9y6XBqN2+N8e7rQzONv6Zc1/EINjGz7qbpA593Me5uRoBtGHENe517BxFjlF7X1tuXY4zWxuhZJIX2ijijc6Mse5gIayzo3FpsH31BI6wWbEZI5ps++OYRSXfZlxJC3V1zYda/HgrUpJc8nPPDgySainFpO1+667PPU6lKzK4jkSN4O48xp4KK3PKHTFOmQAitFA7rjtuFnVlM6zmntSY0FiUyYlMVkaCSUbpIEQmUaOn6aRkZNsx38tCU1Q+yvwAefZ2X+CqTqLY4x3TSOhj2CDhpOR3sB/NQl8nVQAck0TuxzXM/VdlQnQIvEdFxR1E/Z6EtLj9HkNXsdXR74cw5xuDvdvQWop5IzaRj2fTaW/Fe5yyIbXyAghwB7CAQtVqX5Rg9IvDPGmcVFF8Yy9LIWgADSw0CELqi7VnJOO10ODbUcNb8iu92MxZ8zJ2zOuWuYWkNa2zXtcHCzQBvY3xXAozsrMWSyFt79GTYaXtJGfhc+wqMsd0GjXS5NmaL/cP4jWFmMxzFzjnmppbl2Yhk7WFzRfcBncLdi7Gja9jyx77CMOBc5mdzcrg06XF+J38CuaxrDopX0k7+lAbLTU0puNIXyPLZASNC0nL4LqKl0gMkjwGEulJMuRkfXLsw87o5upXLqPvUHVno6NPDLNDclxxf8ABRjrXy01dCQS7oJuq0El0kT2v0G//DOiBYnTua6N8mZjn08bixzSHZ3UwaWkH0TmcTr6qKsx+CJweaymzB2cuZJK92Ym7tY2EWJJ8UK2w2popXyvpXPlfI9z2NdDljaXetmN37/RA15ow45qG3b5/grPnwfVc3K7iuvaowyyRPjMb443nMXAuI0BADm8x6I1BCy4e9rOngF8sTxMwE3PQzNYCO2x6LxKzMlxVwLs0haGskyP6PJ0bs1j0Z6tuo4WtpZYJauoZOJZYiCGtY5gY6NrozHkt2Xb7wOS6Vje3a2cs9bB5VljGndvm7OmpZjnzvNzaV1+xsTsvts0INseHCKqOV2UGmOYA5Q4F7bE8D50KMeLjK7JDUXc2SIG7XtzyRuYBcNGvWvZY8LrRAJIphI27436MBcx7A9pu0kbw4fZSjBqDTLzarHPUQnDhKv8nR4mxvyWR1ieka6JznSNDGuEzXNswMuTZrePFZKJhyRRyFrjkjMZY4RydG++SMh/Vdv01B4aoNieIh1mxue5t81ntyszbr5cxue1Tp8XDsol6hZlaySNvotaBlaQDfS1wRrqdFUY/alRlkzJ53NSf+5lxun6OZ7Re2h1sDYgHW3HVYlvxmUPdm6Rsjnalzcx4AC9wNexdZsjhFJPCx0kLXO1BJvqQSq3bUcrjuk0mcImbroNe7Ur2qlwOjZ6NPAP9tt/Gy3tp2NHVY0dgaAs3nS8GkdK35PD2YfM70YpT/tu/RM+hlb6THDvFl7PUlcftORld4rNai5VRrLSKMbs5a6a6rMzeabpm81vRyliSr6VvNMihWVSbyt+A/zR3H4JJKcnxZti+aPScL3NRmPc5JJeYuz1pdGapQiu3H2p0laMmea4h6Uve5DEkl6cOjys3yEiuzP95j7n/dKSSoiPZ3W239zP0ovvtXA7Rf3hJJOPQ59/+9FEW8d4XTYd/eZ/9RT/APkpJJowkdQPRf8AVz/enQ2TdL/qaT/yZUkky/Jkwf0Kf/XVP/5XIYv/ADpfpfkkkkxmRMEklHgF2P8A8/mvQ/J//J9rvikkpy/E2w/I7SLgrv8AlJJcLPRiDqziuN2m9F3d+qdJRj+aNMnwZxqZySS9I8hkUkkkxH//2Q==',
    color: 'red',
  },

  {
    id: 2,
    name: 'Crimsix',
    role: 'Flex',
    imageUrl: 'https://www.esportspedia.com/streamers/images/3/37/Crimsix.png',
    color: 'blue',
  },
  {
    id: 3,
    name: 'Karma',
    role: 'Sub',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=Karma_2019.png&width=300',
    color: 'green',
  },
  {
    id: 4,
    name: 'Formal',
    role: 'AR',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=FormaL_Chicago_2019.png&width=300',
    color: 'green',
  },
  {
    id: 5,
    name: 'Clayster',
    role: 'AR',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=Clayster2019.png&width=300',
    color: 'yellow',
  },
  {
    id: 6,
    name: 'GodRX',
    role: 'AR',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=GodRX.jpg&width=300',
    color: 'purple',
  },
  {
    id: 7,
    name: 'Simp',
    role: 'Sub',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=Simp_Pic_.jpg&width=300',
    color: 'yellow',
  },
  {
    id: 8,
    name: 'ABeZy',
    role: 'AR',
    imageUrl: 'https://www.esportspedia.com/cod/images/6/63/ABeZy.jpg',
    color: 'yellow',
  },
  {
    id: 9,
    name: 'Prestinni',
    role: 'AR',
    imageUrl: 'https://www.esportspedia.com/cod/images/2/2e/Prestinni.png',
    color: 'yellow',
  },
  {
    id: 10,
    name: 'Arcitys',
    role: 'Flex',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=Arcitys_Chicago_2019.png&width=300',
    color: 'green',
  },
  {
    id: 11,
    name: 'JKap',
    role: 'AR',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=JKap_OGLA_2019.png&width=300',
    color: 'green',
  },
  {
    id: 12,
    name: 'Attach',
    role: 'Sub',
    imageUrl:
      'https://www.esportspedia.com/cod/images/3/30/FaZe_Attach_2015_Winter.png',
    color: 'red',
  },
  {
    id: 13,
    name: 'ZooMaa',
    role: 'AR',
    imageUrl:
      'https://www.esportspedia.com/cod/images/2/26/FaZe_ZooMaa_2015_Winter.png',
    color: 'red',
  },
  {
    id: 14,
    name: 'Temp',
    role: 'Flex',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=Temp_Splyce.png&width=300',
    color: 'yellow',
  },
  {
    id: 15,
    name: 'Huke',
    role: 'Sub',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=Huke2019.png&width=300',
    color: 'darkBlue',
  },
  {
    id: 16,
    name: 'iLLeY',
    role: 'Flex',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=ILLeY.png&width=300',
    color: 'orange',
  },
  {
    id: 17,
    name: 'Shotzzy',
    role: 'Sub',
    imageUrl:
      'https://www.esportspedia.com/cod/thumb.php?f=Shotzzy2019.png&width=300',
    color: 'yellow',
  },
  {
    id: 18,
    name: 'Dashy',
    role: 'Sub',
    imageUrl:
      'https://www.esportspedia.com/cod/images/5/5a/Dashy_OGLA_2019.png',
    color: 'green',
  },
  {
    id: 19,
    name: 'Kenny',
    role: 'Flex',
    imageUrl:
      'https://www.esportspedia.com/cod/images/f/fa/Kenny_OGLA_2019.png',
    color: 'red',
  },
  {
    id: 20,
    name: 'TJHaLy',
    role: 'Sub',
    imageUrl:
      'https://www.esportspedia.com/cod/images/c/c6/TJHaLy_OGLA_2019.png',
    color: 'green',
  },
  {
    id: 21,
    name: 'SlasheR',
    role: 'AR',
    imageUrl:
      'https://www.esportspedia.com/cod/images/0/04/SlasheR_OGLA_2019.png',
    color: 'blue',
  },
  {
    id: 22,
    name: 'Aches',
    role: 'Flex',
    imageUrl: 'https://www.esportspedia.com/cod/images/8/86/ACHES-ENVY.png',
    color: 'black',
  },
  {
    id: 23,
    name: 'Saints',
    role: 'Sub',
    imageUrl: 'https://www.esportspedia.com/cod/images/e/e5/LG_Saints.png',
    color: 'orange',
  },
];

export default users;
