// =====================================
// 1. Phaser 기본 설정
// =====================================

const config = {

    type: Phaser.AUTO,

    parent: "museum-game",

    width: 1100,
    height: 700,

    resolution: Math.min(window.devicePixelRatio || 1, 2),

    backgroundColor: "#D9D0C0",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: {
        create: createMuseum
    }
};

const game = new Phaser.Game(config);


// =====================================
// 2. 박물관 공간 생성
// =====================================

function createMuseum() {

    const scene = this;

    // 그래픽 객체
    const room = this.add.graphics();

    // ---------------------------------
    // 바닥
    // ---------------------------------

    room.fillStyle(0xB9A88E);

    room.fillPoints([
        { x: 550, y: 180 },
        { x: 970, y: 390 },
        { x: 550, y: 600 },
        { x: 130, y: 390 }
    ], true);

    room.lineStyle(3, 0xA38F72, 0.8);

    room.strokePoints([
        { x: 550, y: 180 },
        { x: 970, y: 390 },
        { x: 550, y: 600 },
        { x: 130, y: 390 }
    ], true);


    // ---------------------------------
    // 바닥 타일 무늬
    // ---------------------------------

    room.lineStyle(1, 0xA38F72, 0.3);

    // 왼쪽에서 오른쪽으로 이어지는 선
    for (let i = 1; i < 8; i++) {

        const x = 130 + i * 105;

        room.lineBetween(
            x, 390 - i * 52.5,
            x, 390 + i * 52.5
        );
    }

    // 반대 방향 선
    for (let i = 1; i < 8; i++) {

        const x = 130 + i * 105;

        room.lineBetween(
            x, 390 - (7 - i) * 52.5,
            x, 390 + (7 - i) * 52.5
        );
    }


    // =================================
    // 3. 벽 생성
    // =================================

    // 왼쪽 벽
    room.fillStyle(0x82735F);

    room.fillPoints([
        { x: 130, y: 390 },
        { x: 550, y: 180 },
        { x: 550, y: 70 },
        { x: 130, y: 280 }
    ], true);

    room.lineStyle(3, 0x6C5D4A, 1);

    room.strokePoints([
        { x: 130, y: 390 },
        { x: 550, y: 180 },
        { x: 550, y: 70 },
        { x: 130, y: 280 }
    ], true);


    // 오른쪽 벽
    room.fillStyle(0xA18D72);

    room.fillPoints([
        { x: 550, y: 180 },
        { x: 970, y: 390 },
        { x: 970, y: 280 },
        { x: 550, y: 70 }
    ], true);

    room.lineStyle(3, 0x79694F, 1);

    room.strokePoints([
        { x: 550, y: 180 },
        { x: 970, y: 390 },
        { x: 970, y: 280 },
        { x: 550, y: 70 }
    ], true);


    // =================================
    // 4. 벽 장식
    // =================================

    // 왼쪽 벽 장식
    room.fillStyle(0xC8B99C);

    room.fillPoints([
        { x: 245, y: 307 },
        { x: 330, y: 264 },
        { x: 330, y: 198 },
        { x: 245, y: 241 }
    ], true);

    room.lineStyle(3, 0x665641, 1);

    room.strokePoints([
        { x: 245, y: 307 },
        { x: 330, y: 264 },
        { x: 330, y: 198 },
        { x: 245, y: 241 }
    ], true);


    // 오른쪽 벽 장식
    room.fillStyle(0xD2C2A5);

    room.fillPoints([
        { x: 680, y: 225 },
        { x: 765, y: 268 },
        { x: 765, y: 202 },
        { x: 680, y: 159 }
    ], true);

    room.lineStyle(3, 0x79694F, 1);

    room.strokePoints([
        { x: 680, y: 225 },
        { x: 765, y: 268 },
        { x: 765, y: 202 },
        { x: 680, y: 159 }
    ], true);

    // =====================================
    // 5. 벽면 목재 장식
    // =====================================

    const wallDecor = this.add.graphics();

    // 벽면 장식은 기존 벽 위에 표시
    wallDecor.setDepth(2);


    // ---------------------------------
    // 벽면 상단 목재 테두리
    // ---------------------------------

    wallDecor.lineStyle(7, 0x59452F, 0.65);

    // 왼쪽 벽 상단
    wallDecor.lineBetween(
        130, 280,
        550, 70
    );

    // 오른쪽 벽 상단
    wallDecor.lineBetween(
        550, 70,
        970, 280
    );


    // ---------------------------------
    // 벽면 하단 목재 테두리
    // ---------------------------------

    wallDecor.lineStyle(6, 0x59452F, 0.55);

    wallDecor.lineBetween(
        130, 390,
        550, 180
    );

    wallDecor.lineBetween(
        550, 180,
        970, 390
    );


    // ---------------------------------
    // 왼쪽 벽 세로 기둥
    // ---------------------------------

    wallDecor.lineStyle(8, 0x59452F, 0.65);

    // 첫 번째 기둥
    wallDecor.lineBetween(
        432, 129,
        432, 239
    );

    // ---------------------------------
    // 오른쪽 벽 세로 기둥
    // ---------------------------------

    wallDecor.lineStyle(8, 0x70583F, 0.65);

    // 첫 번째 기둥
    wallDecor.lineBetween(
        668, 129,
        668, 239
    );

    // 두 번째 기둥
    wallDecor.lineBetween(
        894, 242,
        894, 352
    );



    // =================================
    // 5. 박물관 조명
    // =================================




    // =================================
    // 6. 전시대 생성 함수
    // =================================

    function createDisplayStand(x, y) {

        const stand = scene.add.graphics();

        // 그림자
        stand.fillStyle(0x000000, 0.15);

        stand.fillPoints([
            { x: x - 55, y: y + 5 },
            { x: x, y: y - 23 },
            { x: x + 55, y: y + 5 },
            { x: x, y: y + 33 }
        ], true);

        // 전시대 왼쪽 면
        stand.fillStyle(0x80684D);

        stand.fillPoints([
            { x: x - 48, y: y - 5 },
            { x: x, y: y + 19 },
            { x: x, y: y + 65 },
            { x: x - 48, y: y + 41 }
        ], true);

        // 전시대 오른쪽 면
        stand.fillStyle(0xA58B68);

        stand.fillPoints([
            { x: x, y: y + 19 },
            { x: x + 48, y: y - 5 },
            { x: x + 48, y: y + 41 },
            { x: x, y: y + 65 }
        ], true);

        // 전시대 상판
        stand.fillStyle(0xE4D4B8);

        stand.fillPoints([
            { x: x - 48, y: y - 5 },
            { x: x, y: y - 29 },
            { x: x + 48, y: y - 5 },
            { x: x, y: y + 19 }
        ], true);

        stand.lineStyle(2, 0x705A40, 0.8);

        stand.strokePoints([
            { x: x - 48, y: y - 5 },
            { x: x, y: y - 29 },
            { x: x + 48, y: y - 5 },
            { x: x, y: y + 19 }
        ], true);

        return stand;
    }

// =====================================
// 유리 전시 덮개
// =====================================

function drawGlassCase(scene, x, y, height = 58) {

    const g = scene.add.graphics();

    g.setDepth(20);

    const w = 48;
    const d = 24;

    const bottom = [
        [x, y - d],
        [x + w, y],
        [x, y + d],
        [x - w, y]
    ];

    const top = [
        [x, y - d - height],
        [x + w, y - height],
        [x, y + d - height],
        [x - w, y - height]
    ];

    // 유리 측면
    g.fillStyle(0xDDEEFF, 0.10);

    for (let i = 0; i < 4; i++) {

        const next = (i + 1) % 4;

        g.fillPoints([
            new Phaser.Geom.Point(...bottom[i]),
            new Phaser.Geom.Point(...bottom[next]),
            new Phaser.Geom.Point(...top[next]),
            new Phaser.Geom.Point(...top[i])
        ], true);
    }

    // 유리 상단
    g.fillStyle(0xEAF4F5, 0.12);

    g.fillPoints(
        top.map(p => new Phaser.Geom.Point(...p)),
        true
    );

    // 유리 외곽선
    g.lineStyle(1.5, 0xF4F7F5, 0.9);

    for (let i = 0; i < 4; i++) {

        const next = (i + 1) % 4;

        g.lineBetween(
            top[i][0], top[i][1],
            top[next][0], top[next][1]
        );

        g.lineBetween(
            bottom[i][0], bottom[i][1],
            top[i][0], top[i][1]
        );
    }

    // 유리 반사광
    g.lineStyle(3, 0xFFFFFF, 0.55);

    g.lineBetween(
        x - 20,
        y - height - 8,
        x - 5,
        y - height - 18
    );

    // 하단 테두리
    g.lineStyle(2.5, 0x70583F, 0.9);

    g.strokePoints(
        bottom.map(p => new Phaser.Geom.Point(...p)),
        true
    );

    return g;
}

// =====================================
// 유물 선택 및 호버 효과
// =====================================

function createArtifact(x, y) {

    // 유물 표시 그룹
    const artifactGroup = scene.add.container(x, y);

    // 1. 기본 흰색 원
    const whiteCircle = scene.add.circle(
        0, 0, 13, 0xFFFFFF, 0.9
    );

    whiteCircle.setStrokeStyle(2, 0xFFFFFF, 0.8);

    // 은은한 빛 효과
    const glow = scene.add.circle(
        0, 0, 23, 0xFFFFFF, 0.15
    );

    // 2. 유물 형태
    const relic = scene.add.graphics();

    // 청동 유물의 기본 형태
    relic.fillStyle(0x9B7547, 1);

    // 몸체
    relic.fillPoints([
        new Phaser.Geom.Point(-17, -5),
        new Phaser.Geom.Point(-10, -35),
        new Phaser.Geom.Point(10, -35),
        new Phaser.Geom.Point(17, -5),
        new Phaser.Geom.Point(0, 5)
    ], true);

    // 유물 상단 장식
    relic.fillStyle(0xD5B77D, 1);

    relic.fillPoints([
        new Phaser.Geom.Point(-10, -35),
        new Phaser.Geom.Point(0, -45),
        new Phaser.Geom.Point(10, -35),
        new Phaser.Geom.Point(0, -27)
    ], true);

    relic.lineStyle(2, 0x634B30, 1);

    relic.strokePoints([
        new Phaser.Geom.Point(-17, -5),
        new Phaser.Geom.Point(-10, -35),
        new Phaser.Geom.Point(0, -45),
        new Phaser.Geom.Point(10, -35),
        new Phaser.Geom.Point(17, -5),
        new Phaser.Geom.Point(0, 5)
    ], true);

    // 기본적으로 유물은 숨김
    relic.setAlpha(0);

    // 그룹에 추가
    artifactGroup.add([
        glow,
        whiteCircle,
        relic
    ]);

    // 유물의 초기 위치
    artifactGroup.setDepth(10);

    // 3. 마우스 감지 영역
    const hitArea = scene.add.zone(
        x, y - 15, 110, 110
    );

    hitArea.setInteractive({
        useHandCursor: true
    });

    hitArea.setDepth(30);

    // 4. 마우스를 올렸을 때
    hitArea.on("pointerover", () => {

        // 흰색 원 사라짐
        scene.tweens.add({
            targets: [whiteCircle, glow],
            alpha: 0,
            duration: 250
        });

        // 유물 등장
        scene.tweens.add({
            targets: relic,
            alpha: 1,
            duration: 400,
            ease: "Sine.easeOut"
        });

        // 유물이 덮개 위로 올라옴
        scene.tweens.add({
            targets: artifactGroup,
            y: y - 65,
            scale: 1.25,
            duration: 400,
            ease: "Back.easeOut"
        });

        artifactGroup.setDepth(40);

    });

    // 5. 마우스를 내렸을 때
    hitArea.on("pointerout", () => {

        scene.tweens.add({
            targets: [whiteCircle, glow],
            alpha: 1,
            duration: 300
        });

        scene.tweens.add({
            targets: relic,
            alpha: 0,
            duration: 250
        });

        scene.tweens.add({
            targets: artifactGroup,
            y: y,
            scale: 1,
            duration: 400,
            ease: "Sine.easeInOut"
        });

        artifactGroup.setDepth(10);

    });

    return artifactGroup;
}

    // =================================
    // 전시대 배치
    // =================================

    createDisplayStand(350, 355);
    createDisplayStand(550, 440);
    createDisplayStand(750, 355);

    // 유물 생성
    createArtifact(350, 345);
    createArtifact(750, 345);
    createArtifact(550, 430);

    // 유리 덮개 생성
    drawGlassCase(this, 350, 350);
    drawGlassCase(this, 550, 435);
    drawGlassCase(this, 750, 350);
        
// =====================================
// 10. 박물관 입장 타이틀 효과
// =====================================

const entranceTitle = this.add.text(
    550,
    350,
    "고조선관",
    {
        fontSize: "58px",
        fontStyle: "bold",
        color: "#FFF8E9",
        stroke: "#76634D",
        strokeThickness: 3,
        shadow: {
            offsetX: 2,
            offsetY: 3,
            color: "#000000",
            blur: 8,
            fill: true
        }
    }
);

entranceTitle.setOrigin(0.5);
entranceTitle.setDepth(100);

// 3초 동안 표시한 후 1.5초 동안 서서히 사라짐
this.tweens.add({

    targets: entranceTitle,

    alpha: 0,

    duration: 1500,

    delay: 1500,

    ease: "Sine.easeOut",

    onComplete: () => {
        entranceTitle.destroy();
    }

});


}