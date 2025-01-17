(function(global) {
  // fileCache.js without query param "guids"

  var fileCacheJS = {

    /**
    * The pattern below, everything between {_{#guids}_} and {_{/guids}_} will be repeated for every item of the "guids" collection.
    * {_{.}_} (without _) will be replaced with the item of the collection "guids", which is defined in the "context", see JsFileCacheWriter.java
    * the result will look like this:
    * '4ef18c14-40ec-4443-b0a5-1c0d5c7b8702.html': createPromise(),
    * 'a26a1d7d-7f7f-488e-b5dc-be9830c07db6.html': createPromise(),
    * .....
    * 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.html': createPromise(),
    * for more info see https://mustache.github.io/
    */
    // 
    '9cf76e02-e8d4-4da8-9b88-348dee5ec536.html': createPromise(), 
    'fd995446-71e1-497e-95f4-1c089fd7cbb2.html': createPromise(), 
    '7b64fd86-ec6d-4648-a4db-bd27de90010d.html': createPromise(), 
    'f41955f5-a127-4ca4-b595-e6dc6c248560.html': createPromise(), 
    '21fb1399-d91c-4945-96b9-a32c15410ddf.html': createPromise(), 
    'dd3052d5-3d03-49a9-8503-b0679783ea6e.html': createPromise(), 
    'cd4bf001-70b8-4257-b95b-ea9a11cad2cc.html': createPromise(), 
    '842868eb-3cf6-4db2-a567-29da25f5b87f.html': createPromise(), 
    '9687536e-caaa-4625-b367-691c54c5a636.html': createPromise(), 
    '005e0091-77aa-4975-9a70-eade115adca1.html': createPromise(), 
    '6a5d5aec-f483-4136-bd52-acb5444d6705.html': createPromise(), 
    '3ed64abb-5a24-471e-8e6a-7c677013835e.html': createPromise(), 
    '0772e779-1020-4981-ad82-d42e4132c812.html': createPromise(), 
    '1311612d-a506-464a-9ace-dd0cd8fca772.html': createPromise(), 
    'dd4ac775-2649-43f2-8722-c49bbac34a3d.html': createPromise(), 
    '758a1cbb-463e-48d9-815f-ad7ea2b3ea84.html': createPromise(), 
    '0ba7b533-d956-4a22-9e35-d9589015f0d5.html': createPromise(), 
    '2c86c4e6-48f8-4c42-891b-4e6380763d30.html': createPromise(), 
    'f4783694-6fd6-48ad-9dd9-cbad6b1014e3.html': createPromise(), 
    '6cfd1c52-7cd8-415f-81d0-bf455a223cd8.html': createPromise(), 
    '19ed197f-ed85-4cb3-bbbe-fddbec0224fa.html': createPromise(), 
    'caf5e8e8-bbd8-432e-98a4-8508591b4156.html': createPromise(), 
    '6d65936d-728f-4e3b-ac40-f4f18bf687bd.html': createPromise(), 
    'cafa96fe-ec3e-49c6-a44a-025f44d46d61.html': createPromise(), 
    '0b1966b4-0a00-4020-9b20-6cbdf105b8fc.html': createPromise(), 
    '9260d632-91d0-40a8-b59e-26a32d85484f.html': createPromise(), 
    '7bbf9086-c32f-4e42-8734-f2bcaaa5120d.html': createPromise(), 
    'fcdf154c-7673-458c-b298-e7e1b45bb45b.html': createPromise(), 
    'b0513e69-e4c4-40e8-87a4-750b4c97f1ca.html': createPromise(), 
    'c0879f0d-b99b-4c66-aabe-d9cf6c72d0a4.html': createPromise(), 
    'd11b11b2-4b0a-49ee-81e6-9ae1bacd76b3.html': createPromise(), 
    'f3351ab6-8d4c-48b8-b090-0af414d7f528.html': createPromise(), 
    'c882f409-674c-4449-9b2d-805855b7e5be.html': createPromise(), 
    'cdb05a69-16c3-4e5c-870b-5df63a104cb3.html': createPromise(), 
    'c3b91762-2e5e-4c5c-9ea6-4db5ad64d4c7.html': createPromise(), 
    'dedee22b-fcea-4517-b50a-a050302daf49.html': createPromise(), 
    'fd83f9c1-3558-4cf4-b381-3da05d006f9c.html': createPromise(), 
    '37a48c82-0fd7-4f91-beda-bd9d1418814a.html': createPromise(), 
    '2d7146ff-5621-4dce-8885-f1224d8dd35a.html': createPromise(), 
    '99e84f56-5a5c-4ddf-9b58-8b8a26c976b6.html': createPromise(), 
    'df640b04-19db-43d8-b50b-7d0aec718d61.html': createPromise(), 
    'dff7fa46-b604-4a53-8701-b295285a125c.html': createPromise(), 
    '123e6416-565c-4873-ba3d-1e577709f308.html': createPromise(), 
    '96770773-6814-4dcc-8afb-57da08ba0c65.html': createPromise(), 
    '03ccbade-21c3-4f4d-af86-0e7d1c69c7e8.html': createPromise(), 
    'a3d462a1-089e-404c-be7c-d59a436005f0.html': createPromise(), 
    '5bfc01bd-ed18-4848-87f4-e9b686773c22.html': createPromise(), 
    'e77f5f84-5242-4c21-ba82-66d63f17d73b.html': createPromise(), 
    '4ab5519c-a3b6-4a93-ad86-5b8a387ab86b.html': createPromise(), 
    'b28f06cb-d5ff-474c-a2ff-ef68f61b8a3c.html': createPromise(), 
    '0a84452f-808d-42ca-9878-6b920a9ac7a3.html': createPromise(), 
    'e35f6bf7-9710-499e-9c8c-f38c3ebf9a89.html': createPromise(), 
    '1708568d-2ffb-4fcf-bce2-441ed59f52f7.html': createPromise(), 
    '58ba913a-1fef-4eb1-9322-03cc8e25ffa4.html': createPromise(), 
    '560e8a22-4c85-4571-aae7-11bf33923f5a.html': createPromise(), 
    '39c594fc-9bda-4ac4-91d1-ca6829be717c.html': createPromise(), 
    '7e85b60f-8cfa-43f7-aad3-f2e856614f71.html': createPromise(), 
    '56a8da8f-031b-4849-9630-47cc6040cf3d.html': createPromise(), 
    'f5599eaf-0e6a-43ec-80c5-279f3b4940ff.html': createPromise(), 
    '33cbca0b-48a4-4bec-87b3-62caf788a96c.html': createPromise(), 
    '4c20088f-1540-487f-85b7-987c1b7f1e1f.html': createPromise(), 
    'e846c9e6-3e50-47b3-9880-8862e152bd10.html': createPromise(), 
    '571dada2-226c-43af-bd8e-d40044c88044.html': createPromise(), 
    '3b3b5137-bba3-45c5-9573-926668d49f6d.html': createPromise(), 
    '4445afeb-1dc3-40be-95a9-f5218de77b3f.html': createPromise(), 
    'db277579-4857-46d8-bce3-b902ade43725.html': createPromise(), 
    'bb8bc357-5fa4-48e6-935c-ee0e58b684aa.html': createPromise(), 
    '9c9b1d65-bab3-4253-877a-5693ab99a20a.html': createPromise(), 
    '867ae6e3-dfb8-44de-a499-47a58f9d92e6.html': createPromise(), 
    'b6aabcdb-0a85-4eb5-ad99-b887b859bb22.html': createPromise(), 
    '0c4222e6-2c38-417c-b097-8dc735636ee3.html': createPromise(), 
    '92129f3b-5484-44b1-a2fc-8ed14108538c.html': createPromise(), 
    'e40ed4eb-5ac1-4a66-8d54-9b450f3777c1.html': createPromise(), 
    'a8c3fd57-6865-4bae-b997-103bae754076.html': createPromise(), 
    '2a15df0f-5101-4197-a9d7-4b2fac6c2aeb.html': createPromise(), 
    '1e5ed888-5fc1-4c25-a415-13e8276cdc3c.html': createPromise(), 
    '35b67fa6-8bc2-412f-9c5b-8b76898b2a9b.html': createPromise(), 
    '7d695d5b-33a3-44ae-9219-03ca10de2999.html': createPromise(), 
    '5deecd2d-c3a5-4ef2-9cbc-778987b28b4a.html': createPromise(), 
    'ecd4bb1a-6aa8-4b7a-8a24-8e9f9cbfe29c.html': createPromise(), 
    '922eebbe-5b27-4c8d-9b44-f214a48b8ba6.html': createPromise(), 
    'b13bbdda-e38f-41cc-8bf3-348c259ffc4c.html': createPromise(), 
    '52ce1f3b-6c78-4d34-9bcd-37cebac8bb3e.html': createPromise(), 
    '3d8fa757-d21c-41d3-9e82-446b4dcc7545.html': createPromise(), 
    '91a285c6-80d0-4cfd-8536-e329809f790f.html': createPromise(), 
    '418d704c-4d94-465b-89c3-d3d6f3bf37cd.html': createPromise(), 
    '93737865-ce3a-4f29-bb7c-889ec9933113.html': createPromise(), 
    'cb52d5a4-8d1f-4ef2-ad4d-9eaba52db670.html': createPromise(), 
    'c5379c0a-749e-49c5-b8e2-a99bae52186a.html': createPromise(), 
    '122ee0a6-b0b5-4b74-b129-fb5c3a3858b7.html': createPromise(), 
    '87457fb5-66c0-419e-a790-ffd589eab3c9.html': createPromise(), 
    '63329368-66ae-4348-bb11-67720a597783.html': createPromise(), 
    '9a02cc32-3305-485f-a7cc-c238fdc45b6a.html': createPromise(), 
    'ae23602b-4911-4730-a3fe-9564a33974ed.html': createPromise(), 
    'a01ce313-c824-40ed-a56e-24fff7d8ea8c.html': createPromise(), 
    '11c9f13a-d2a9-4c6b-9179-565da4bdc3d8.html': createPromise(), 
    'df9d3509-efd2-4079-9782-074f3807d4df.html': createPromise(), 
    '5e93b9c2-d3b9-4c4f-9a31-6ecd3a0b33c2.html': createPromise(), 
    '27338774-3fa3-4627-8215-92e7673c398b.html': createPromise(), 
    'fc9b90c3-7967-4021-a65f-8467c3503a18.html': createPromise(), 
    '5aebf288-4737-48b0-9832-053b1a91255f.html': createPromise(), 
    '0446b341-46cd-4c7c-81c0-ab53f5ea838c.html': createPromise(), 
    'dab2d8d5-9253-41a6-bd3a-6537aca68422.html': createPromise(), 
    '1a14031e-8d03-4fb8-9686-e136d5b7b5c9.html': createPromise(), 
    '72d1db88-5ae5-4e2a-b713-e0d387bfbfe9.html': createPromise(), 
    '4e9f84f9-5da3-483a-b59f-b525bd7b831a.html': createPromise(), 
    'b2a73313-9fdd-4179-b972-9c22f0b4ad74.html': createPromise(), 
    'd0070571-1357-4a8b-b90d-0f67a909d982.html': createPromise(), 
    'aa515bea-8fa0-440b-b3f8-044242f2c7bf.html': createPromise(), 
    'a9769a15-f0be-42fa-9a38-3dde6a4176ac.html': createPromise(), 
    '1538ea0b-0442-439f-84aa-a05a5d79d018.html': createPromise(), 
    '2000619d-f79b-4d7f-9bb1-14a35ea38c1d.html': createPromise(), 
    'f215d1ba-a066-4043-9269-6d9d9fac2d10.html': createPromise(), 
    '2c03f46b-3f76-4745-b1fa-7117b68a3ca4.html': createPromise(), 
    'deea0492-1645-4222-9e44-cfd74bc4b112.html': createPromise(), 
    'c7774e86-2817-48b6-bf4f-3cf52a53dc9e.html': createPromise(), 
    'dec83bd6-b915-40d8-85f3-c2e293859db9.html': createPromise(), 
    'e55e7093-4f25-44f8-a0a1-23fd212eb910.html': createPromise(), 
    '617157d7-cb9f-4e64-abb3-494716ef555a.html': createPromise(), 
    'd6c1b547-87a3-45f7-8b22-e967cf5550e2.html': createPromise(), 
    '3364694c-37cc-4693-bda1-b726d3a4943e.html': createPromise(), 
    '9afb3de0-bd63-4621-a2a8-4ac9023d3937.html': createPromise(), 
    '4844f60f-3585-49a7-9b39-ddf2d254bf15.html': createPromise(), 
    '2a8024ff-6dd0-4ccd-887e-41d868a93697.html': createPromise(), 
    '6ca1c621-53ea-4a44-9a68-d76308529155.html': createPromise(), 
    '3ce8d380-86d2-4dc6-85f9-f960b696b392.html': createPromise(), 
    '1188c8b5-728b-44bb-85f0-d1d28be8297b.html': createPromise(), 
    '969caa05-48a8-4088-b780-fa9e252bc465.html': createPromise(), 
    'a61d5c7a-f86f-400d-bad4-463a33f84719.html': createPromise(), 
    '1ed652f0-33f7-4ee6-af8e-180dacbb71a6.html': createPromise(), 
    'd25142e0-f720-410d-a17a-9d9dffbbb19a.html': createPromise(), 
    '638b135f-8cf5-4955-be5c-f1fdb1e5354c.html': createPromise(), 
    'b41a2569-564e-4ed8-8cc3-347411ea461b.html': createPromise(), 
    '089ef74a-0484-4949-81cb-c33c864bed92.html': createPromise(), 
    '4d53eea2-d9e7-45b8-a414-c722e4792ad8.html': createPromise(), 
    'd8a8510a-51cc-4e37-a647-f6926ba2dc0d.html': createPromise(), 
    'a7469fda-8fb6-4103-94b1-c8bad71e6a5d.html': createPromise(), 
    'c088e599-5655-4e98-92b9-d59bc6247377.html': createPromise(), 
    '74f2c3a1-7281-4013-a679-fc6f440aa25c.html': createPromise(), 
    '19ed197f-ed85-4cb3-bbbe-fddbec0224fa_xref.html': createPromise(), 
    'a0d6a28a-e04a-43c7-bb7d-3da6b5955bdd.html': createPromise(), 
    '1c40f0f1-44b2-48c0-a34f-98112d7e006e.html': createPromise(), 
    'd434d14b-390a-4028-acc9-632dd75ae285.html': createPromise(), 
    '518d6501-d308-47f1-9ade-8a77e6b767fa.html': createPromise(), 
    '268ce77d-a138-49fc-8717-98487aff0ad9.html': createPromise(), 
    '287fd802-e408-43a9-9012-b8c31427fdb0.html': createPromise(), 
    'ff1ca8a6-a605-4b23-af6b-0e00ebb23d26.html': createPromise(), 
    '21cf9a7f-92f6-4e87-a53d-54a657fe8dba.html': createPromise(), 
    '7c300e84-99ac-47f6-a693-31cb1e6421c0.html': createPromise(),  //<-- end of repeated part

    resolve: function fileCacheJSResolve(guid, content) {
      var promise = fileCacheJS[guid];

      if (!promise) {
        // log error
        return;
      }

      promise.resolve(content);
    }
  };

  function createPromise() {
    var resolve;
    var reject;

    var p = new Promise(function(res, rej) {
      resolve = res;
      reject = rej;
    });

    p.resolve = resolve;
    p.reject = reject;
    var then = p.then.bind(p);

    var listeners = [];

    p.onThen = function (listener) {
      listeners.push(listener);
    };

    p.then = function (success, failed) { // detect when called
      listeners.forEach(function (fn) {
        fn();
      });

      return then(success, failed);
    };

    return p;
  }


    /**
     * The pattern below, everything between {_{#batchPathNames}_} and {_{/batchPathNames}_} will be expanded to the array of string
     * using the content of the "batchPathNames" collection. The result will look like this:
     * batchPathNames = ['resources/fileCacheBatch_1.js', 'resources/fileCacheBatch_2.js', ...'resources/fileCacheBatch_N.js'];
     * see JsFileCacheWriter.java and https://mustache.github.io/
     */
  var batchPathNames = [
      // 
      'resources/fileCacheBatch_28.js', 
      'resources/fileCacheBatch_26.js', 
      'resources/fileCacheBatch_2.js', 
      'resources/fileCacheBatch_24.js', 
      'resources/fileCacheBatch_30.js', 
      'resources/fileCacheBatch_8.js', 
      'resources/fileCacheBatch_6.js', 
      'resources/fileCacheBatch_4.js', 
      'resources/fileCacheBatch_18.js', 
      'resources/fileCacheBatch_14.js', 
      'resources/fileCacheBatch_16.js', 
      'resources/fileCacheBatch_12.js', 
      'resources/fileCacheBatch_20.js', 
      'resources/fileCacheBatch_10.js', 
      'resources/fileCacheBatch_22.js', 
      'resources/fileCacheBatch_9.js', 
      'resources/fileCacheBatch_5.js', 
      'resources/fileCacheBatch_25.js', 
      'resources/fileCacheBatch_27.js', 
      'resources/fileCacheBatch_1.js', 
      'resources/fileCacheBatch_7.js', 
      'resources/fileCacheBatch_23.js', 
      'resources/fileCacheBatch_3.js', 
      'resources/fileCacheBatch_19.js', 
      'resources/fileCacheBatch_15.js', 
      'resources/fileCacheBatch_17.js', 
      'resources/fileCacheBatch_13.js', 
      'resources/fileCacheBatch_11.js', 
      'resources/fileCacheBatch_21.js', 
      'resources/fileCacheBatch_29.js'  //<--end of repeated part
      ];

    /**
     * The pattern below, everything between {_{#guidBatchMap}_} and {_{/guidBatchMap}_} will be expanded to the map of string to string
     * using the content of the "guidBatchMap" map. The result will look like this:
     * guidsBatchMap = {
     * '4ef18c14-40ec-4443-b0a5-1c0d5c7b8702.html' : 'resources/fileCacheBatch_1.js',
     * 'a26a1d7d-7f7f-488e-b5dc-be9830c07db6.html' : 'resources/fileCacheBatch_2.js',
     * ....
     * 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.html' : 'resources/fileCacheBatch_N.js'
     * };
     * see JsFileCacheWriter.java and https://mustache.github.io/
     */
  var guidsBatchMap = {
    // 
        '9cf76e02-e8d4-4da8-9b88-348dee5ec536.html' : 'resources/fileCacheBatch_1.js', 
        'fd995446-71e1-497e-95f4-1c089fd7cbb2.html' : 'resources/fileCacheBatch_1.js', 
        '7b64fd86-ec6d-4648-a4db-bd27de90010d.html' : 'resources/fileCacheBatch_1.js', 
        'f41955f5-a127-4ca4-b595-e6dc6c248560.html' : 'resources/fileCacheBatch_1.js', 
        '21fb1399-d91c-4945-96b9-a32c15410ddf.html' : 'resources/fileCacheBatch_1.js', 
        'dd3052d5-3d03-49a9-8503-b0679783ea6e.html' : 'resources/fileCacheBatch_2.js', 
        'cd4bf001-70b8-4257-b95b-ea9a11cad2cc.html' : 'resources/fileCacheBatch_2.js', 
        '842868eb-3cf6-4db2-a567-29da25f5b87f.html' : 'resources/fileCacheBatch_2.js', 
        '9687536e-caaa-4625-b367-691c54c5a636.html' : 'resources/fileCacheBatch_2.js', 
        '005e0091-77aa-4975-9a70-eade115adca1.html' : 'resources/fileCacheBatch_2.js', 
        '6a5d5aec-f483-4136-bd52-acb5444d6705.html' : 'resources/fileCacheBatch_3.js', 
        '3ed64abb-5a24-471e-8e6a-7c677013835e.html' : 'resources/fileCacheBatch_3.js', 
        '0772e779-1020-4981-ad82-d42e4132c812.html' : 'resources/fileCacheBatch_3.js', 
        '1311612d-a506-464a-9ace-dd0cd8fca772.html' : 'resources/fileCacheBatch_3.js', 
        'dd4ac775-2649-43f2-8722-c49bbac34a3d.html' : 'resources/fileCacheBatch_3.js', 
        '758a1cbb-463e-48d9-815f-ad7ea2b3ea84.html' : 'resources/fileCacheBatch_4.js', 
        '0ba7b533-d956-4a22-9e35-d9589015f0d5.html' : 'resources/fileCacheBatch_4.js', 
        '2c86c4e6-48f8-4c42-891b-4e6380763d30.html' : 'resources/fileCacheBatch_4.js', 
        'f4783694-6fd6-48ad-9dd9-cbad6b1014e3.html' : 'resources/fileCacheBatch_4.js', 
        '6cfd1c52-7cd8-415f-81d0-bf455a223cd8.html' : 'resources/fileCacheBatch_4.js', 
        '19ed197f-ed85-4cb3-bbbe-fddbec0224fa.html' : 'resources/fileCacheBatch_5.js', 
        'caf5e8e8-bbd8-432e-98a4-8508591b4156.html' : 'resources/fileCacheBatch_5.js', 
        '6d65936d-728f-4e3b-ac40-f4f18bf687bd.html' : 'resources/fileCacheBatch_5.js', 
        'cafa96fe-ec3e-49c6-a44a-025f44d46d61.html' : 'resources/fileCacheBatch_5.js', 
        '0b1966b4-0a00-4020-9b20-6cbdf105b8fc.html' : 'resources/fileCacheBatch_5.js', 
        '9260d632-91d0-40a8-b59e-26a32d85484f.html' : 'resources/fileCacheBatch_6.js', 
        '7bbf9086-c32f-4e42-8734-f2bcaaa5120d.html' : 'resources/fileCacheBatch_6.js', 
        'fcdf154c-7673-458c-b298-e7e1b45bb45b.html' : 'resources/fileCacheBatch_6.js', 
        'b0513e69-e4c4-40e8-87a4-750b4c97f1ca.html' : 'resources/fileCacheBatch_6.js', 
        'c0879f0d-b99b-4c66-aabe-d9cf6c72d0a4.html' : 'resources/fileCacheBatch_6.js', 
        'd11b11b2-4b0a-49ee-81e6-9ae1bacd76b3.html' : 'resources/fileCacheBatch_7.js', 
        'f3351ab6-8d4c-48b8-b090-0af414d7f528.html' : 'resources/fileCacheBatch_7.js', 
        'c882f409-674c-4449-9b2d-805855b7e5be.html' : 'resources/fileCacheBatch_7.js', 
        'cdb05a69-16c3-4e5c-870b-5df63a104cb3.html' : 'resources/fileCacheBatch_7.js', 
        'c3b91762-2e5e-4c5c-9ea6-4db5ad64d4c7.html' : 'resources/fileCacheBatch_7.js', 
        'dedee22b-fcea-4517-b50a-a050302daf49.html' : 'resources/fileCacheBatch_8.js', 
        'fd83f9c1-3558-4cf4-b381-3da05d006f9c.html' : 'resources/fileCacheBatch_8.js', 
        '37a48c82-0fd7-4f91-beda-bd9d1418814a.html' : 'resources/fileCacheBatch_8.js', 
        '2d7146ff-5621-4dce-8885-f1224d8dd35a.html' : 'resources/fileCacheBatch_8.js', 
        '99e84f56-5a5c-4ddf-9b58-8b8a26c976b6.html' : 'resources/fileCacheBatch_8.js', 
        'df640b04-19db-43d8-b50b-7d0aec718d61.html' : 'resources/fileCacheBatch_9.js', 
        'dff7fa46-b604-4a53-8701-b295285a125c.html' : 'resources/fileCacheBatch_9.js', 
        '123e6416-565c-4873-ba3d-1e577709f308.html' : 'resources/fileCacheBatch_9.js', 
        '96770773-6814-4dcc-8afb-57da08ba0c65.html' : 'resources/fileCacheBatch_9.js', 
        '03ccbade-21c3-4f4d-af86-0e7d1c69c7e8.html' : 'resources/fileCacheBatch_9.js', 
        'a3d462a1-089e-404c-be7c-d59a436005f0.html' : 'resources/fileCacheBatch_10.js', 
        '5bfc01bd-ed18-4848-87f4-e9b686773c22.html' : 'resources/fileCacheBatch_10.js', 
        'e77f5f84-5242-4c21-ba82-66d63f17d73b.html' : 'resources/fileCacheBatch_10.js', 
        '4ab5519c-a3b6-4a93-ad86-5b8a387ab86b.html' : 'resources/fileCacheBatch_10.js', 
        'b28f06cb-d5ff-474c-a2ff-ef68f61b8a3c.html' : 'resources/fileCacheBatch_10.js', 
        '0a84452f-808d-42ca-9878-6b920a9ac7a3.html' : 'resources/fileCacheBatch_11.js', 
        'e35f6bf7-9710-499e-9c8c-f38c3ebf9a89.html' : 'resources/fileCacheBatch_11.js', 
        '1708568d-2ffb-4fcf-bce2-441ed59f52f7.html' : 'resources/fileCacheBatch_11.js', 
        '58ba913a-1fef-4eb1-9322-03cc8e25ffa4.html' : 'resources/fileCacheBatch_11.js', 
        '560e8a22-4c85-4571-aae7-11bf33923f5a.html' : 'resources/fileCacheBatch_11.js', 
        '39c594fc-9bda-4ac4-91d1-ca6829be717c.html' : 'resources/fileCacheBatch_12.js', 
        '7e85b60f-8cfa-43f7-aad3-f2e856614f71.html' : 'resources/fileCacheBatch_12.js', 
        '56a8da8f-031b-4849-9630-47cc6040cf3d.html' : 'resources/fileCacheBatch_12.js', 
        'f5599eaf-0e6a-43ec-80c5-279f3b4940ff.html' : 'resources/fileCacheBatch_12.js', 
        '33cbca0b-48a4-4bec-87b3-62caf788a96c.html' : 'resources/fileCacheBatch_12.js', 
        '4c20088f-1540-487f-85b7-987c1b7f1e1f.html' : 'resources/fileCacheBatch_13.js', 
        'e846c9e6-3e50-47b3-9880-8862e152bd10.html' : 'resources/fileCacheBatch_13.js', 
        '571dada2-226c-43af-bd8e-d40044c88044.html' : 'resources/fileCacheBatch_13.js', 
        '3b3b5137-bba3-45c5-9573-926668d49f6d.html' : 'resources/fileCacheBatch_13.js', 
        '4445afeb-1dc3-40be-95a9-f5218de77b3f.html' : 'resources/fileCacheBatch_13.js', 
        'db277579-4857-46d8-bce3-b902ade43725.html' : 'resources/fileCacheBatch_14.js', 
        'bb8bc357-5fa4-48e6-935c-ee0e58b684aa.html' : 'resources/fileCacheBatch_14.js', 
        '9c9b1d65-bab3-4253-877a-5693ab99a20a.html' : 'resources/fileCacheBatch_14.js', 
        '867ae6e3-dfb8-44de-a499-47a58f9d92e6.html' : 'resources/fileCacheBatch_14.js', 
        'b6aabcdb-0a85-4eb5-ad99-b887b859bb22.html' : 'resources/fileCacheBatch_14.js', 
        '0c4222e6-2c38-417c-b097-8dc735636ee3.html' : 'resources/fileCacheBatch_15.js', 
        '92129f3b-5484-44b1-a2fc-8ed14108538c.html' : 'resources/fileCacheBatch_15.js', 
        'e40ed4eb-5ac1-4a66-8d54-9b450f3777c1.html' : 'resources/fileCacheBatch_15.js', 
        'a8c3fd57-6865-4bae-b997-103bae754076.html' : 'resources/fileCacheBatch_15.js', 
        '2a15df0f-5101-4197-a9d7-4b2fac6c2aeb.html' : 'resources/fileCacheBatch_15.js', 
        '1e5ed888-5fc1-4c25-a415-13e8276cdc3c.html' : 'resources/fileCacheBatch_16.js', 
        '35b67fa6-8bc2-412f-9c5b-8b76898b2a9b.html' : 'resources/fileCacheBatch_16.js', 
        '7d695d5b-33a3-44ae-9219-03ca10de2999.html' : 'resources/fileCacheBatch_16.js', 
        '5deecd2d-c3a5-4ef2-9cbc-778987b28b4a.html' : 'resources/fileCacheBatch_16.js', 
        'ecd4bb1a-6aa8-4b7a-8a24-8e9f9cbfe29c.html' : 'resources/fileCacheBatch_16.js', 
        '922eebbe-5b27-4c8d-9b44-f214a48b8ba6.html' : 'resources/fileCacheBatch_17.js', 
        'b13bbdda-e38f-41cc-8bf3-348c259ffc4c.html' : 'resources/fileCacheBatch_17.js', 
        '52ce1f3b-6c78-4d34-9bcd-37cebac8bb3e.html' : 'resources/fileCacheBatch_17.js', 
        '3d8fa757-d21c-41d3-9e82-446b4dcc7545.html' : 'resources/fileCacheBatch_17.js', 
        '91a285c6-80d0-4cfd-8536-e329809f790f.html' : 'resources/fileCacheBatch_17.js', 
        '418d704c-4d94-465b-89c3-d3d6f3bf37cd.html' : 'resources/fileCacheBatch_18.js', 
        '93737865-ce3a-4f29-bb7c-889ec9933113.html' : 'resources/fileCacheBatch_18.js', 
        'cb52d5a4-8d1f-4ef2-ad4d-9eaba52db670.html' : 'resources/fileCacheBatch_18.js', 
        'c5379c0a-749e-49c5-b8e2-a99bae52186a.html' : 'resources/fileCacheBatch_18.js', 
        '122ee0a6-b0b5-4b74-b129-fb5c3a3858b7.html' : 'resources/fileCacheBatch_18.js', 
        '87457fb5-66c0-419e-a790-ffd589eab3c9.html' : 'resources/fileCacheBatch_19.js', 
        '63329368-66ae-4348-bb11-67720a597783.html' : 'resources/fileCacheBatch_19.js', 
        '9a02cc32-3305-485f-a7cc-c238fdc45b6a.html' : 'resources/fileCacheBatch_19.js', 
        'ae23602b-4911-4730-a3fe-9564a33974ed.html' : 'resources/fileCacheBatch_19.js', 
        'a01ce313-c824-40ed-a56e-24fff7d8ea8c.html' : 'resources/fileCacheBatch_19.js', 
        '11c9f13a-d2a9-4c6b-9179-565da4bdc3d8.html' : 'resources/fileCacheBatch_20.js', 
        'df9d3509-efd2-4079-9782-074f3807d4df.html' : 'resources/fileCacheBatch_20.js', 
        '5e93b9c2-d3b9-4c4f-9a31-6ecd3a0b33c2.html' : 'resources/fileCacheBatch_20.js', 
        '27338774-3fa3-4627-8215-92e7673c398b.html' : 'resources/fileCacheBatch_20.js', 
        'fc9b90c3-7967-4021-a65f-8467c3503a18.html' : 'resources/fileCacheBatch_20.js', 
        '5aebf288-4737-48b0-9832-053b1a91255f.html' : 'resources/fileCacheBatch_21.js', 
        '0446b341-46cd-4c7c-81c0-ab53f5ea838c.html' : 'resources/fileCacheBatch_21.js', 
        'dab2d8d5-9253-41a6-bd3a-6537aca68422.html' : 'resources/fileCacheBatch_21.js', 
        '1a14031e-8d03-4fb8-9686-e136d5b7b5c9.html' : 'resources/fileCacheBatch_21.js', 
        '72d1db88-5ae5-4e2a-b713-e0d387bfbfe9.html' : 'resources/fileCacheBatch_21.js', 
        '4e9f84f9-5da3-483a-b59f-b525bd7b831a.html' : 'resources/fileCacheBatch_22.js', 
        'b2a73313-9fdd-4179-b972-9c22f0b4ad74.html' : 'resources/fileCacheBatch_22.js', 
        'd0070571-1357-4a8b-b90d-0f67a909d982.html' : 'resources/fileCacheBatch_22.js', 
        'aa515bea-8fa0-440b-b3f8-044242f2c7bf.html' : 'resources/fileCacheBatch_22.js', 
        'a9769a15-f0be-42fa-9a38-3dde6a4176ac.html' : 'resources/fileCacheBatch_22.js', 
        '1538ea0b-0442-439f-84aa-a05a5d79d018.html' : 'resources/fileCacheBatch_23.js', 
        '2000619d-f79b-4d7f-9bb1-14a35ea38c1d.html' : 'resources/fileCacheBatch_23.js', 
        'f215d1ba-a066-4043-9269-6d9d9fac2d10.html' : 'resources/fileCacheBatch_23.js', 
        '2c03f46b-3f76-4745-b1fa-7117b68a3ca4.html' : 'resources/fileCacheBatch_23.js', 
        'deea0492-1645-4222-9e44-cfd74bc4b112.html' : 'resources/fileCacheBatch_23.js', 
        'c7774e86-2817-48b6-bf4f-3cf52a53dc9e.html' : 'resources/fileCacheBatch_24.js', 
        'dec83bd6-b915-40d8-85f3-c2e293859db9.html' : 'resources/fileCacheBatch_24.js', 
        'e55e7093-4f25-44f8-a0a1-23fd212eb910.html' : 'resources/fileCacheBatch_24.js', 
        '617157d7-cb9f-4e64-abb3-494716ef555a.html' : 'resources/fileCacheBatch_24.js', 
        'd6c1b547-87a3-45f7-8b22-e967cf5550e2.html' : 'resources/fileCacheBatch_24.js', 
        '3364694c-37cc-4693-bda1-b726d3a4943e.html' : 'resources/fileCacheBatch_25.js', 
        '9afb3de0-bd63-4621-a2a8-4ac9023d3937.html' : 'resources/fileCacheBatch_25.js', 
        '4844f60f-3585-49a7-9b39-ddf2d254bf15.html' : 'resources/fileCacheBatch_25.js', 
        '2a8024ff-6dd0-4ccd-887e-41d868a93697.html' : 'resources/fileCacheBatch_25.js', 
        '6ca1c621-53ea-4a44-9a68-d76308529155.html' : 'resources/fileCacheBatch_25.js', 
        '3ce8d380-86d2-4dc6-85f9-f960b696b392.html' : 'resources/fileCacheBatch_26.js', 
        '1188c8b5-728b-44bb-85f0-d1d28be8297b.html' : 'resources/fileCacheBatch_26.js', 
        '969caa05-48a8-4088-b780-fa9e252bc465.html' : 'resources/fileCacheBatch_26.js', 
        'a61d5c7a-f86f-400d-bad4-463a33f84719.html' : 'resources/fileCacheBatch_26.js', 
        '1ed652f0-33f7-4ee6-af8e-180dacbb71a6.html' : 'resources/fileCacheBatch_26.js', 
        'd25142e0-f720-410d-a17a-9d9dffbbb19a.html' : 'resources/fileCacheBatch_27.js', 
        '638b135f-8cf5-4955-be5c-f1fdb1e5354c.html' : 'resources/fileCacheBatch_27.js', 
        'b41a2569-564e-4ed8-8cc3-347411ea461b.html' : 'resources/fileCacheBatch_27.js', 
        '089ef74a-0484-4949-81cb-c33c864bed92.html' : 'resources/fileCacheBatch_27.js', 
        '4d53eea2-d9e7-45b8-a414-c722e4792ad8.html' : 'resources/fileCacheBatch_27.js', 
        'd8a8510a-51cc-4e37-a647-f6926ba2dc0d.html' : 'resources/fileCacheBatch_28.js', 
        'a7469fda-8fb6-4103-94b1-c8bad71e6a5d.html' : 'resources/fileCacheBatch_28.js', 
        'c088e599-5655-4e98-92b9-d59bc6247377.html' : 'resources/fileCacheBatch_28.js', 
        '74f2c3a1-7281-4013-a679-fc6f440aa25c.html' : 'resources/fileCacheBatch_28.js', 
        '19ed197f-ed85-4cb3-bbbe-fddbec0224fa_xref.html' : 'resources/fileCacheBatch_28.js', 
        'a0d6a28a-e04a-43c7-bb7d-3da6b5955bdd.html' : 'resources/fileCacheBatch_29.js', 
        '1c40f0f1-44b2-48c0-a34f-98112d7e006e.html' : 'resources/fileCacheBatch_29.js', 
        'd434d14b-390a-4028-acc9-632dd75ae285.html' : 'resources/fileCacheBatch_29.js', 
        '518d6501-d308-47f1-9ade-8a77e6b767fa.html' : 'resources/fileCacheBatch_29.js', 
        '268ce77d-a138-49fc-8717-98487aff0ad9.html' : 'resources/fileCacheBatch_29.js', 
        '287fd802-e408-43a9-9012-b8c31427fdb0.html' : 'resources/fileCacheBatch_30.js', 
        'ff1ca8a6-a605-4b23-af6b-0e00ebb23d26.html' : 'resources/fileCacheBatch_30.js', 
        '21cf9a7f-92f6-4e87-a53d-54a657fe8dba.html' : 'resources/fileCacheBatch_30.js', 
        '7c300e84-99ac-47f6-a693-31cb1e6421c0.html' : 'resources/fileCacheBatch_30.js' // <--end of repeated part
  };

  // must run only once

  var isCalled = false;

  function startCachingGuids(firstGuid) {
      if (isCalled) {
          return;
      } else {
          isCalled = true;
      }

    var batchPath = guidsBatchMap[firstGuid];

    getDocumentBatch(batchPath)
      .then(function () {
        // load the rest of batches

        batchPathNames
          .filter(function (batchName) {
            return batchPath !== batchName;
          })
          .forEach(function (batchPath) {
            getDocumentBatch(batchPath)
          });
      })
  }

   Object.keys(fileCacheJS)
    .filter(function (guid) {
      return !!fileCacheJS[guid].then;
    })
    .forEach(function (guid) {
      var p = fileCacheJS[guid];

      p.onThen(function () {
        startCachingGuids(guid);
      });
    });

  function getDocumentBatch(path) {
    var promise = createPromise();
    var script = document.createElement('script');

    script.src = path;
    script.async = true;
    script.onload = function () {
      promise.resolve();
    };

    script.onerror = function(err) {
      console.error(err);
      // handle error
      guids.forEach(function(guid) {
        fileCacheJS[guid].reject();
      });

      promise.reject();
    };

    document.body.appendChild(script);

    return promise;
  }

  global.__fileCacheJS = fileCacheJS;

  global.define(fileCacheJS);
})(window);
