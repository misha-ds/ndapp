
var caCert =
  '-----BEGIN CERTIFICATE-----\n' +
  'MIIDajCCAlICCQDgeRZY85PN7TANBgkqhkiG9w0BAQUFADB2MQswCQYDVQQGEwJV\n' +
  'UzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzEh\n' +
  'MB8GA1UEChMYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMRcwFQYDVQQDEw5EZW1v\n' +
  'IEF1dGhvcml0eTAgFw0xNTA3MDQyMTQxNDlaGA8yMTE1MDYxMDIxNDE0OVowdjEL\n' +
  'MAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\n' +
  'cmFuY2lzY28xITAfBgNVBAoTGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDEXMBUG\n' +
  'A1UEAxMORGVtbyBBdXRob3JpdHkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK\n' +
  'AoIBAQC+kP1Zn05sixEGRQ9waRZtAEb2MBYtrebUkh6ogNiVCFfo6qWp9gmqeucU\n' +
  'PGl4cEMyVIJNqvURFsYwTmMQwGsoT7ek9rgGcdr/DSrqClq+micRalORrmYzUZ1W\n' +
  'cY5GwYdLv+fFbOKb4/sQY5XnS7pUp23Pc+AIAB7O29gWdDcPF1wuA3NU+rvuopkN\n' +
  'pYN5FPFViqOAxHffT3bAFF3LAPN3YS0zqjXNlM2zM58kfyRvMvE9fotbjfX8LWms\n' +
  'Je6kD4AYmcehcHvkBeKyvKa5Zh90uNdgC6wmtUHZ+sqt5a02mE+uHongLCMME3bP\n' +
  '2F+ov3fbEsPng4bLcgsLy/R4MB0pAgMBAAEwDQYJKoZIhvcNAQEFBQADggEBAJ2K\n' +
  'RscR2O97SW+hnWBrHgNGHsMvsFel0Ne2X6IJ7AJmir0eIVgG22U9BkevMKvC9dOZ\n' +
  '9k9sgQsIVSvcMCIXZaCMEvTli65SxHE55OJdWIeBn/6vNysX2gSDxDmxGUnWpHHe\n' +
  'JALL57Fp4GKAvEKnnvvM7WyACReluDTwweQn2W4cXwaOrs37cF22CaQljJfdhZfS\n' +
  'KkJ/R9OGW0fSefebH6ofsVWD2aOzWPGj2mIxQhcjoa1XTEZu37Ab0290KIWUOMCA\n' +
  'XNWIq782dRGWOpm653cvdgkDijeU821dddJR7qb/WrTODhnI3N28lxC6kfl3Wawr\n' +
  'vnEg2nF657AcrlZHImM=\n' +
  '-----END CERTIFICATE-----';

var serverKey =
  '-----BEGIN RSA PRIVATE KEY-----\n' +
  'MIIEpQIBAAKCAQEAwtM92Lm1dtFkDHmFxIrTL3fJZcVejTfxJqtvL931iF7jRaIJ\n' +
  '6T1kRibkz6Lj6/87JuGzBXBJo9nv6Faycep20bUetDZ6TpO0r5YhjpZiKKGuVy35\n' +
  'Tj2/KuR0gM/Ift0N9+8eqZ+09cFEqDywjzbnSsnNYEuEcKDnSxjyy339O2QAl3Aw\n' +
  'BuTdhP1VsXsvvtzQEepzb/rj46hsGSd+regEItKJjQjb/Bh76kQ+4Ab1CRq+ZSei\n' +
  '5wrEFSpivPqSDXqgIzxCqCuFyQu4x13w22Guf3dzPVf5GsiYxED1t7c2O3reISrb\n' +
  'dMS70njU9pca9UlmIXFnue8TIzZLOcZeXBVZhQIDAQABAoIBAQCMpNCd9xqgBvMx\n' +
  '6jx+MTXZq6DxXjUuvzbQkqv2o0ZQRyfMqfh7rz0HQ6akmlPtl1hNblu9Tl1q8ra1\n' +
  'RHkXsYpLQ3RB5p4OwaSLqVbaR4ffCzD/cInsSLkLrtbH8rgrlUszNCUvkMKjMv1s\n' +
  'cjuHd7wrClm/7WRTpmSymvUToAVCbGDWtrj1aPILqdlNI8VGhrUiEO5ukecnHLhS\n' +
  'EQJgxPzQkJnSdpJAtJrFEErvaoPoNfZl7vcqEAFtKahqAZEXhWLy1n/61kqO+NGe\n' +
  'rbF3fLikdj8cAqmOOLuy8BZxUGTkoE7/7tTEPqrf8QR2R6bSdXBq4zPO/v9+we62\n' +
  'e4dM1NThAoGBAO0hjAeGrtxqQEUNaFFqkCZCoTR395E/QjBLHxpp5DfAQE7jFMSO\n' +
  'qK9Fy98YZqKJeLOMBodKoeQt/Hd9Q2PPaQFr7Elj9lN6DhAlV5jLX5ZoWeazRf7R\n' +
  'yq8IyYP61ZwVcInzrbwaYCheT++WvR+ccV8FG4LfO8THuh6BBNh8nKrNAoGBANJT\n' +
  '6DfeCy9AaReB7gy85O5JhTVA2qZZr1V8kX5HDytNSDW+s9qGb7MM2oITiOg3lKyE\n' +
  'yToqsOtjwwmk8dihC1iZXC0u5dYrJtgVsE7pWzqXAU5M8uILYW7AtgPcG+pYUBmu\n' +
  '9XF0L03Tur9Wv+Owhbi/K8E0nblufzwaWljbWlmZAoGBAM9R7y19UVAgDQTSTgww\n' +
  'kMsCohJPeMEif2ndo9niDse3bAIMg1G+MDjdWvs4SDN+4WqI2ARc+eGXWw3VFKAk\n' +
  '7HdztegMX4ZoRfdTzpwl4vKLVV5gCqhZH02c7yJWoX+PNw9FXvYAUWW530Vnkv4a\n' +
  'NvyOaJkpNwY6YLzerC/h8s9ZAoGAZfP2ZN5lXYpDZvm8gsAt2LQati2xz2E59J5l\n' +
  'iGi5mavkjOjcFdmE264nXVZKzwXiM55KTL/U8sVxDYO/F9s4vMHaRKyvDJnuQmCB\n' +
  'Dj9f0Y7ROzthoOETYbRYhpZzka0tZsXAhDZll7xCke1jJuOyblN8yjLPIcvGMUQ0\n' +
  '902dBkECgYEAv2+Lk+eM326snmetHWKRbgPsWtOVsU2L2DkRsgAXUPjQ1VJSD5df\n' +
  'yw+L/F3ubSpqBYNdV8MmD+eBp3bboY+QLpHwyTrGIhG8fjeFLVhGYvwkpko+bjyi\n' +
  '7lS5/+rZsjHQSNmm8WdOdZYx4cZqYlmXb7tMnTct4DkaslD2KhYeLjY=\n' +
  '-----END RSA PRIVATE KEY-----';

var serverCert =
  '-----BEGIN CERTIFICATE-----\n' +
  'MIIDZTCCAk0CCQC+bRt5zDRK+jANBgkqhkiG9w0BAQUFADB2MQswCQYDVQQGEwJV\n' +
  'UzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzEh\n' +
  'MB8GA1UEChMYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMRcwFQYDVQQDEw5EZW1v\n' +
  'IEF1dGhvcml0eTAgFw0xNTA3MDQyMTU1NThaGA8yMTE1MDYxMDIxNTU1OFowcTEL\n' +
  'MAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\n' +
  'cmFuY2lzY28xITAfBgNVBAoTGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDESMBAG\n' +
  'A1UEAxMJbG9jYWxob3N0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n' +
  'wtM92Lm1dtFkDHmFxIrTL3fJZcVejTfxJqtvL931iF7jRaIJ6T1kRibkz6Lj6/87\n' +
  'JuGzBXBJo9nv6Faycep20bUetDZ6TpO0r5YhjpZiKKGuVy35Tj2/KuR0gM/Ift0N\n' +
  '9+8eqZ+09cFEqDywjzbnSsnNYEuEcKDnSxjyy339O2QAl3AwBuTdhP1VsXsvvtzQ\n' +
  'Eepzb/rj46hsGSd+regEItKJjQjb/Bh76kQ+4Ab1CRq+ZSei5wrEFSpivPqSDXqg\n' +
  'IzxCqCuFyQu4x13w22Guf3dzPVf5GsiYxED1t7c2O3reISrbdMS70njU9pca9Ulm\n' +
  'IXFnue8TIzZLOcZeXBVZhQIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQA1ZguJfw+4\n' +
  'ktLmz4WdigSVspbkdtqLzPqkfQ1O8qwFqn60JTMnAALWxT+qt+6aLxWLKykOfzNL\n' +
  'p3MKgY/zjZ721YkHxknHw7UBEykwW2fUY33+1WW/IzkpMMp8FW8BwaGRqD+b2RUk\n' +
  'w2+HBCqa4xjESZjjAlsh+Z9W+dKRK4+B76U+2lqyHMKRFDDKKj7rK/0n7afZP9EO\n' +
  'kpc5566sUseRLZVgd27YfxBXmT3zhOWHJjqzor/Iya6O2kdDxqJ355Q6n9HprPe+\n' +
  '6RwmMfRbgDpTkkbuniXhJrRBnSLyFjPgdJCOHSfHCGR+i0Q8HOAxzWHpvJaT8q26\n' +
  '3pVDsVCgsgUI\n' +
  '-----END CERTIFICATE-----\n';



var clientKey =
  '-----BEGIN RSA PRIVATE KEY-----\n' +
  'MIIEpgIBAAKCAQEA7Gc7QlrFW8XikIfMsqL/wcxn6pS2AZmNNEUEqS4H2wtfZP6U\n' +
  'w8JeDACUGMkgelt/5HisbZgO0RnlJ+0gXZqWKV96n/OGrB8ju1C/6P6P9lkcYByZ\n' +
  'KLF9rAiNcL5dy6VSAPTvokCL+5XZl1yjBTSeJjXTocjLVM6IB5dMO+GyFuFkaZUU\n' +
  '4CHtAKEyE+nQ+9uOmDQfB5Ijp1KZFN+U3CE99Wel8FEno1QKjlXAGk8hiIaW3nDX\n' +
  'YmRxwVUajDfUvJ3hpzIu0zOZf4oVAPt+FozK4zaXvg0E71kNJooYrcyr7dUD6Mkm\n' +
  'xg8MJrgQnRPlYzhldEZYOG1su0BrpCnOjIA75wIDAQABAoIBAQDe/eVlCvBdSAUV\n' +
  '5jMNUjnEGcbv/MTOL4SFiJED8JqSYWDjiEzVdzN1SNppotaS9FpoLfggDK31SeLh\n' +
  'zYiZIueAMUMfO/yNwXXYDCxqYC1158qfUnqaaworS4n3jmo1XUVEB8c/GnmwoEI2\n' +
  'x7gygdaoHl/5nMlHvuWLm4jad2OgtbyxLVW/BG8d2f9OG1P4N2inE8kZVfkDvX21\n' +
  'qnlFf8HWUGpMxHwjcNN6DD+42kD1pKqRVkHCGXHRztOHRhr2VzDPssSLU7rd/Yjv\n' +
  'hPcUj34J+2WL+rpfKNFsDeqA/eA03whID1AOaPKGfjGklsbvzoBf4a/6CkWBomxu\n' +
  'IRh9XGnBAoGBAP82BkTO1g4lD8SuSAlQAX1Ob/SiF+ps+Cvhqz2evG9Dkd1LnC2O\n' +
  'CGYWJUyNUMQLsT+E3pNYilMgfY+fZILD8Pzl7hsPCF2DKiiQDhdGaKWbAgYMCxrY\n' +
  'Ye8cRbHTBmLrHOoa1H2JQzUm4Q8JvRjWDQWlZayVw9nxuEw3ufeI1KbhAoGBAO0i\n' +
  'UojwLde72LuPa+l02h4mAYDQFQArKmd9H2p71V/GQQDN9SGsMJfOdEAyP9Md2qlj\n' +
  'vy8jAzy3dUXAWwDJeFeUls/KFM4hnkfqBK9FsE7FHchQr5M1nfov0lYe5gjLmH7A\n' +
  'k9IKheR12K/X1vocEcb4W+X9M+4drOulFML7WePHAoGBAJ4xL5uRFe/4mxiP6wkS\n' +
  'tYmliBH8M5TU7NPOcyWj8iuJl62zQ2CdbKlSytXztn9+u+SiiJCOzlcOiaXv6A6C\n' +
  'RCuOnpPZMpc8SXKRMJrOwuj79zomVu/R9oqPXMgIBSplkCuwa8xQu/8DVXfL0pHF\n' +
  'hJbeWfKrdpXulg1wcW51O1MhAoGBAN13e6vG3JmqJ41sMjVz263igu7h52sj5VOH\n' +
  'yQpzIuFy0AzHTZQoM63jtDCsfW1XaXtf3BNS2Ngg4tbFAnjmsIzjCkKAEhQ904yI\n' +
  'Y92p8TJv6BPIP2H15lfdx8yEyQQX2ZEvnB7Dky6+XSRFKdKm2neARpuycYiGkJP3\n' +
  'tj8v7lDLAoGBAJLnvMH3bmzezgpQHZ2hlQ58nrHfBcD2wrILaXylsUgA4ddjWhAP\n' +
  'iSe8ie3UEkHjzSWRzj4cQvgZjqdgScg4XVMxMnaxUia5yVVJAWtLmoCFTjT/ZJgM\n' +
  'MsS2LGlPYBwDeHW7i7vYwMX8aU0huBpo/CxZnB8BzJgqj/NSEAtclBux\n' +
  '-----END RSA PRIVATE KEY-----\n';

var clientCert =
  '-----BEGIN CERTIFICATE-----\n' +
  'MIIDZTCCAk0CCQC+bRt5zDRK+zANBgkqhkiG9w0BAQUFADB2MQswCQYDVQQGEwJV\n' +
  'UzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZyYW5jaXNjbzEh\n' +
  'MB8GA1UEChMYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMRcwFQYDVQQDEw5EZW1v\n' +
  'IEF1dGhvcml0eTAgFw0xNTA3MDQyMTU3MjJaGA8yMTE1MDYxMDIxNTcyMlowcTEL\n' +
  'MAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\n' +
  'cmFuY2lzY28xITAfBgNVBAoTGEludGVybmV0IFdpZGdpdHMgUHR5IEx0ZDESMBAG\n' +
  'A1UEAxMJbG9jYWxob3N0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n' +
  '7Gc7QlrFW8XikIfMsqL/wcxn6pS2AZmNNEUEqS4H2wtfZP6Uw8JeDACUGMkgelt/\n' +
  '5HisbZgO0RnlJ+0gXZqWKV96n/OGrB8ju1C/6P6P9lkcYByZKLF9rAiNcL5dy6VS\n' +
  'APTvokCL+5XZl1yjBTSeJjXTocjLVM6IB5dMO+GyFuFkaZUU4CHtAKEyE+nQ+9uO\n' +
  'mDQfB5Ijp1KZFN+U3CE99Wel8FEno1QKjlXAGk8hiIaW3nDXYmRxwVUajDfUvJ3h\n' +
  'pzIu0zOZf4oVAPt+FozK4zaXvg0E71kNJooYrcyr7dUD6Mkmxg8MJrgQnRPlYzhl\n' +
  'dEZYOG1su0BrpCnOjIA75wIDAQABMA0GCSqGSIb3DQEBBQUAA4IBAQBDu0nppbbO\n' +
  'tPweh4LiHlk4efjiepWTLolD7FHyj1c5cCg4Ml3+XmRd3jTvXEgqMKsw4OYQsGFy\n' +
  'pfV5W2ehwQnGEBtgGAixMAjj6+GTk53oYRjwW8QxM4MaxJio7guPavvjtUoLR5mf\n' +
  'vMtRw90zI75wB0U+D4c1AHF5LxRoSQN/n1bN0NStxgPKEWQdvqXwo3G5u/dibjC3\n' +
  '7iYFI2XhKHg5FBG0xrrA9xArJigA1TS3yq5tAFLOR22wla/fSqlxV3mCkUfJCKka\n' +
  'jUa7eC1K/+0IAssrazo/ND2H5brcmGXvJaiNPRAjrxPF32DqpwzVNcspJ7KzCWif\n' +
  'immNPLi3ksvI\n' +
  '-----END CERTIFICATE-----\n';

module.exports={

 caCert:caCert,
 serverKey:serverKey,
 serverCert:serverCert,
 clientKey:clientKey,
 clientCert:clientCert,
}
