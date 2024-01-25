declare type int = number
declare type float = number
declare type bool = boolean
declare type double = number
declare type uintptr_t = number

interface vector<T>{
    size(): number
    set(index: number, value: T): void
    get(index: number): T
    push_back(value: T): bool
    // resize
}

interface map<K, V>{
    get(key: K): V | undefined
    set(key: K, value: V): void
    size(): int
}

/**
 * WASM Object
 */
declare class ClassHandle {
    delete(): object
    isDeleted(): bool
}

declare class WasmObject extends ClassHandle{}

declare module WasmModule{
    /**
     * @example
     * // nodejs
     * let Module = require("./military")
     * let lineType = Module.GVGeoParamType.LINE
     * let line = new Module.GVHelper("GV00001")
     */
    enum GVGeoParamType{
        LINE = 0,
        IMAGE = 1,
        TEXT = 2
    }

    class UpToDownData extends WasmObject {
        constructor()
        setHasNewResult(hasNewResult: double): void
        getHasNewResult(): double
        setOutPoints(outPoints: vector<LineGVCoord>): void
        getOutPoints(): vector<LineGVCoord>
    }

    /**
     * 参数类
     */
    class GVGeomParams extends WasmObject{
        constructor()
        ////////////////////// generated:
        setLineType(lineType: int): void
        getLineType(): int
        setFillType(fillType: int): void
        getFillType(): int
        setGradientFillType(gradientFillType: int): void
        getGradientFillType(): int
        setTessellation(tessellation: int): void
        getTessellation(): int
        setOutLineFlag(outLineFlag: int): void
        getOutLineFlag(): int
        setOutLineDir(outLineDir: int): void
        getOutLineDir(): int
        setIsLocationPoint(isLocationPoint: bool): void
        getIsLocationPoint(): bool
        setSubsymbolcode(subsymbolcode: int): void
        getSubsymbolcode(): int
        setIsLineColorChanged(isLineColorChanged: bool): void
        getIsLineColorChanged(): bool
        setIsTextColorChanged(isTextColorChanged: bool): void
        getIsTextColorChanged(): bool
        setIsOutLineColorChanged(isOutLineColorChanged: bool): void
        getIsOutLineColorChanged(): bool
        setIsLineTypeChanged(isLineTypeChanged: bool): void
        getIsLineTypeChanged(): bool
        setIsFill(isFill: bool): void
        getIsFill(): bool
        setIsFillalways(isFillalways: bool): void
        getIsFillalways(): bool
        setCanFilled(canFilled: bool): void
        getCanFilled(): bool
        setIsGradientFill(isGradientFill: bool): void
        getIsGradientFill(): bool
        setIsSubSymbol(isSubSymbol: bool): void
        getIsSubSymbol(): bool
        setIsSubSymbolColorChanged(isSubSymbolColorChanged: bool): void
        getIsSubSymbolColorChanged(): bool
        setIsLineText(isLineText: bool): void
        getIsLineText(): bool
        setIsSelfText(isSelfText: bool): void
        getIsSelfText(): bool
        setIsTextureContainText(isTextureContainText: bool): void
        getIsTextureContainText(): bool
        setIsFlagTxt(isFlagTxt: bool): void
        getIsFlagTxt(): bool
        setText(text: string): void
        getText(): string
        setTextFont(textFont: string): void
        getTextFont(): string
        setTextalignment(textalignment: int): void
        getTextalignment(): int
        setTextrotation(textrotation: double): void
        getTextrotation(): double
        setTextSize(textSize: float): void
        getTextSize(): float
        setTextAspectRation(textAspectRation: float): void
        getTextAspectRation(): float
        setIstextHalo(istextHalo: bool): void
        getIstextHalo(): bool
        setIstextBackground(istextBackground: bool): void
        getIstextBackground(): bool
        setIstextShade(istextShade: bool): void
        getIstextShade(): bool
        setIstextBold(istextBold: bool): void
        getIstextBold(): bool
        setIstextItaly(istextItaly: bool): void
        getIstextItaly(): bool
        setTextKern(textKern: double): void
        getTextKern(): double
        setIstextUnderline(istextUnderline: bool): void
        getIstextUnderline(): bool
        setTxtScaleX(txtScaleX: double): void
        getTxtScaleX(): double
        setTxtScaleY(txtScaleY: double): void
        getTxtScaleY(): double
        setTxtScaleZ(txtScaleZ: double): void
        getTxtScaleZ(): double
        setTxtDirection(txtDirection: double): void
        getTxtDirection(): double
        setUrl(url: string): void
        getUrl(): string
        setAngle(angle: double): void
        getAngle(): double
        setScalex(scalex: double): void
        getScalex(): double
        setScaley(scaley: double): void
        getScaley(): double
        setScalez(scalez: double): void
        getScalez(): double
        setIsdraped(isdraped: bool): void
        getIsdraped(): bool
        setIsheightfield(isheightfield: bool): void
        getIsheightfield(): bool
        setMirrorStyle(mirrorStyle: int): void
        getMirrorStyle(): int
        setDefaultColorFlag(DefaultColorFlag: int): void
        getDefaultColorFlag(): int
        setIsedit(isedit: bool): void
        getIsedit(): bool
        setHighlightState(highlightState: bool): void
        getHighlightState(): bool
        setSelectState(selectState: bool): void
        getSelectState(): bool
        setCanSelect(canSelect: bool): void
        getCanSelect(): bool
        setWidth(width: double): void
        getWidth(): double
        setOutLineState(OutLineState: bool): void
        getOutLineState(): bool
        setChangeAngle(changeAngle: bool): void
        getChangeAngle(): bool
        setIstextFrame(istextFrame: bool): void
        getIstextFrame(): bool
        setIs3dText(is3dText: bool): void
        getIs3dText(): bool
        setVtxBuffer(vtxBuffer: vector<LineGVCoord>): void
        getVtxBuffer(): vector<LineGVCoord>
        setParamType(type: Module.GVGeoParamType): void
        getParamType(): Module.GVGeoParamType
        getControlPointCount(): int
        //////////////////////////////////////////////////
        setLineColor(lineColor: osgVec4): void
        getLineColor(): osgVec4
        setFillColor(fillColor: osgVec4): void
        getFillColor(): osgVec4
        setFillAlwaysColor(fillAlwaysColor: osgVec4): void
        getFillAlwaysColor(): osgVec4
        setOutLineColor(outLineColor: osgVec4): void
        getOutLineColor(): osgVec4
        setSubSymbolColor(subSymbolColor: osgVec4): void
        getSubSymbolColor(): osgVec4
        setTextposition(textposition: osgVec3d): void
        getTextposition(): osgVec3d
        setTextOffset(textOffset: osgVec3d): void
        getTextOffset(): osgVec3d
        setTextColor(textColor: osgVec4): void
        getTextColor(): osgVec4
        setTextHaloColor(textHaloColor: osgVec4): void
        getTextHaloColor(): osgVec4
        setTextBackgroundColor(textBackgroundColor: osgVec4): void
        getTextBackgroundColor(): osgVec4
        setTextShadeColor(textShadeColor: osgVec4): void
        getTextShadeColor(): osgVec4
        setTextureColor(textureColor: osgVec4): void
        getTextureColor(): osgVec4
    }

    /**
     * 线段的封装类
     */
    class GVHelper extends WasmObject{
        /**
         * @param name 传入 jbName
         */
        constructor(name: string)

        /**
         * 判断是否可用
         * @param name
         * @return {bool}
         * @example
         * let line;
         * const name = "GV00001"
         * const ret = Module.GVHelper.hasGeometry(name);
         * if(ret){
         *    line = new Module.GVHelper(name)
         * }
         */
        static hasGeometry(name: string): bool
        /**
         *
         * @param ptr 传递 Float64Array 的指针数值(ptr指向的内容为[lon1,lat1,alt1, lon2,lat2,alt2, ...])
         * @param size 数组的长度(三个点传入9)
         * @see test.js 的 cb 函数
         */
        setControlPoints(ptr: uintptr_t, size: number): void
        setControlPointsEx(ptr: uintptr_t, size: number): void
        /**
         * 16 号标特有API
         * @param indx 
         * @param percent 
         */
        setControlPointsExWithGrowth(ptr: uintptr_t, size: number, indx: int, percent: double): void
        getControlPoints(): vector<LineGVCoord>
        /**
         * setControlPointsByScales 的 js 版本。用法同 setControlPoints。
         * @param ptr 传递 Float64Array 的指针数值
         * @param size
         */
        setControlPointsByScalesFromJsptr(ptr: uintptr_t, size: number): void
        setControlPointsByScales(s: vector<double>): void
        /**
         * 失败时返回 size 为 0 的 vector<double>
         */
        getControlPointsByScales(): vector<double>
        getInputControlPoints(): vector<LineGVCoord>
        setPoint(index: int, vtx: LineGVCoord)
        getPoint(index: int): LineGVCoord
        setAllPoints(v: vector<LineGVCoord>)
        getAllPoints():vector<LineGVCoord>
        /**
         * setControlPoints 传入坐标后调用
         * @see setControlPoints
         */
        toVertice(): bool

        /**
         * 调用之后再分别调用
         * @example
         * let r = line.toVerticeEx()
         * let vvb = line.getVerticeVtxBuffer()
         * let vvb2 = line.getVerticeVtxBuffer2()
         * @see getVerticeVtxBuffer getVerticeVtxBuffer返回坐标
         * @see getVerticeVtxBuffer2  getVerticeVtxBuffer2 返回每一组不同类型点的数量，下标累加
         * @see getVerticeAlphaBuffer  getVerticeAlphaBuffer 获取alpha值。[30003未被赋值]
         * @see getVerticeTypeBuffer  填充类型。[30003未被赋值]
         */
        toVerticeEx(): bool
        getVerticeVtxBuffer(): vector<LineGVCoord>
        getVerticeVtxBuffer2(): vector<int>
        getVerticeAlphaBuffer(): vector<float>
        getVerticeTypeBuffer(): vector<int>

        /**
         * 获取当前算法最小需要点的数量
         */
        getMinDot(): int

        /**
         * 获取当前算法最大需要点的数量
         */
        getMaxDot(): int
        /**
         * 与  getTargetParams 配合使用
         * @param params 键值对
         * @see getTargetParams
         */
        setTargetValues(params: map<string,string>): void
        getTargetParams(): map<string,string>
        /**
         * 取出对应的字符串值
         * @param key
         * @param defaultValue key对应的值不存在时返回的默认值
         */
        value(key: string, defaultValue: string/* = ""*/): string
        constValue(key: string, defaultValue: string/* = ""*/): string
        /**
         * 取出对应的 double 类型的数值。若 key 在键值对中已存在但无法转换为 double 型时则返回数值 0。若 key 值不存在则返回 defaultValue. 下面的 intValue 同。
         * @param key
         * @param defaultValue key对应的值不存在时返回的默认值
         */
        doubeValue(key: string, defaultValue: number/* = 0.0*/): number
        intValue(key: string, defaultValue: number/* = 0*/): number

        getGeoParams(): vector<GVGeomParams>

        /**
         * @param idx 下标。基本取 0 值。
         */
        getGeoParamsByIndex(idx: number): GVGeomParams
        getGeoParamsVtxBuf(idx: number): vector<LineGVCoord>
        getRotatePoint(): LineGVCoord
        setRotatePoint(vtx: LineGVCoord): void
        getControlPoint(index: number): LineGVCoord

        /**
         * 返回输入的控制点
         */
        getInputControlPoints(): vector<LineGVCoord>

        getControlPointCount(): int
        getGeoLengthPerPixel(): double
        getLengthPerPixel():double
        setGeoLengthPerPixel(): void

        setIClass(iClass: int): void
        getIClass(): int
        setSubCodeScale(s: vector<double>): void
        getSubSymbolNum(): int
        setSubCode(idx: int, code: int): void
        getSubCode(idx: int): int
        setSubSymbolsSize(s: vector<double>): void
        getSubSymbolsSize(): vector<double>
        setSubSymbolSize(idx: int, size: double): void
        getSubSymbolSize(idx: int): double
        setSubSymbolColor(idx: int, color: osgVec4): void
        getSubSymbolColor(idx: int): osgVec4
        setSubText(idx: int, text:string): void
        getSubText(idx: int): string
        setSubTextFont(font: string): void
        getSubTextFont(): string
        setArrowStyle(idx: int, arrowStyle: int): void
        getArrowStyle(idx: int): int
        setArrowSize(arrowSize: int): void
        getArrowSize(): int
        setMarkShape(markShape: int): void
        getMarkShape(): int
        setMarkType(markType: int): void
        getMarkType(): int

        setTextPoint(vtx: LineGVCoord): void
        getTextPoint(): LineGVCoord

        /**
         * 根据给定控制点，获取对应的贝塞尔辅助点,为普通贝塞尔辅助点的获取方法，肾图需要重新实现
         * @param index
         * @example
         * line.getAssitantBeziers(index)
         * let pnts = line.getBeziersOutPoints() // vector<LineGVCoord>
         * let ints = line.getBeziersIndexList() // vector<int>
         */
        getAssitantBeziers(index: int): void

        /**
         * 请先调用 getAssitantBeziers(int)
         * @see getAssitantBeziers
         */
        getBeziersOutPoints(): vector<LineGVCoord>
        /**
         * 请先调用 getAssitantBeziers(int)
         * @see getAssitantBeziers
         */
        getBeziersIndexList(): vector<int>
        setLevel(level: int): void
        getLevel(): int
        isDirty(): bool
        clearDirty(): void
        update(): void
        setGroupOffset(offset: LineGVCoord): void
        getGroupOffset(): LineGVCoord

        getOutLineBuffer(): vector<int>
        /**
         * 当前无GV调用
         */
        getAnnoTextParam(index: int): vector<GVGeomParams>
        setSelfText(selfText: string): void
        getSelfText(): string
    }

    /**
     * 坐标
     */
    class LineGVCoord extends WasmObject{
        getLon(): number
        getLat(): number
        getAlt(): number

        setLon(lon: number): void
        setLat(lat: number): void
        setAlt(alt: number): void
        setCoord(lon: number, lat: number, alt: number): void
        setCoordByVecAlt(vec2: osgVec2, alt:number):void

        equal(c: LineGVCoord): bool
        valid(): bool
        toVec2(): osgVec2
        static average(c1:LineGVCoord, c2:LineGVCoord):LineGVCoord
    }

    class osgVec2 extends WasmObject{
        constructor()
        x(): float
        y(): float

        setX(value: float): void
        setY(value: float): void
    }

    class osgVec4 extends WasmObject{
        constructor()
        // get xyzw
        x(): float
        y(): float
        z(): float
        w(): float

        // set xyzw
        setX(value: float): void
        setY(value: float): void
        setZ(value: float): void
        setW(value: float): void
    }

    class osgVec3d extends WasmObject{
        constructor()
        // get xyz
        x(): float
        y(): float
        z(): float

        // set xyz
        setX(value: float): void
        setY(value: float): void
        setZ(value: float): void
    }
}