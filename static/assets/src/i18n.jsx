import Jed from 'jed';

const DEFAULT_LANGUAGE_PACK = {
    "domain": "superset",
    "locale_data": {
        "superset": {
            "": {
                "domain": "superset",
                "plural_forms": "nplurals=1; plural=0",
                "lang": "zh"
            },
            "Time Column": [
                "时间字段"
            ],
            "second": [
                "秒"
            ],
            "minute": [
                "分"
            ],
            "hour": [
                "小时"
            ],
            "day": [
                "天"
            ],
            "week": [
                "周"
            ],
            "month": [
                "月"
            ],
            "quarter": [
                "季度"
            ],
            "year": [
                "年"
            ],
            "week_ending_saturday": [
                "周日为一周开始"
            ],
            "week_start_sunday": [
                "周日为一周结束"
            ],
            "week_start_monday": [
                "周一为一周开始"
            ],
            "5 minute": [
                "5 分钟"
            ],
            "half hour": [
                "半小时"
            ],
            "10 minute": [
                "10 分钟"
            ],
            "Table Name": [
                "表名"
            ],
            "Name of table to be created from csv data.": [
                "要从csv数据创建的表的名称。"
            ],
            "CSV File": [
                "CSV 文件"
            ],
            "Select a CSV file to be uploaded to a database.": [
                "选择要上传到数据库的CSV文件。"
            ],
            "CSV Files Only!": [
                "只支持CSV文件格式!"
            ],
            "Database": [
                "数据库"
            ],
            "Delimiter": [
                "分隔符"
            ],
            "Delimiter used by CSV file (for whitespace use \\s+).": [
                "CSV文件使用的分隔符(使用空格 \\s+)."
            ],
            "Table Exists": [
                "表不存在"
            ],
            "If table exists do one of the following: Fail (do nothing), Replace (drop and recreate table) or Append (insert data).": [
                "如果存在表，请执行以下操作之一:失败(什么都不做),替换(删除并重新创建表)或插入(插入数据)。"
            ],
            "Fail": [
                "失败"
            ],
            "Replace": [
                "替换"
            ],
            "Append": [
                "插入"
            ],
            "Schema": [
                "模式"
            ],
            "Specify a schema (if database flavour supports this).": [
                "指定一个模式(如果数据库风格支持这个)。"
            ],
            "Header Row": [
                "标题行"
            ],
            "Row containing the headers to use as column names (0 is first line of data). Leave empty if there is no header row.": [
                "包含要用作列名的头的行(0是第一行数据)。如果没有标题行，则为空。"
            ],
            "Index Column": [
                "索引列"
            ],
            "Column to use as the row labels of the dataframe. Leave empty if no index column.": [
                "要用作dataframe的行标签的列。如果没有索引列，则为空。"
            ],
            "Mangle Duplicate Columns": [
                ""
            ],
            "Specify duplicate columns as \"X.0, X.1\".": [
                ""
            ],
            "Skip Initial Space": [
                "跳过初始空间"
            ],
            "Skip spaces after delimiter.": [
                "在分隔符之后跳过空格。"
            ],
            "Skip Rows": [
                "跳行"
            ],
            "Number of rows to skip at start of file.": [
                "文件开头要跳过的行数。"
            ],
            "Rows to Read": [
                "读行"
            ],
            "Number of rows of file to read.": [
                "要读取的文件行数。"
            ],
            "Skip Blank Lines": [
                "跳过空白行"
            ],
            "Skip blank lines rather than interpreting them as NaN values.": [
                "跳过空白行，而不是将它们解释为NaN值。"
            ],
            "Parse Dates": [
                "解析日期"
            ],
            "A comma separated list of columns that should be parsed as dates.": [
                "一个逗号分隔的列列表，应该作为日期解析。"
            ],
            "Infer Datetime Format": [
                "推断Datetime格式"
            ],
            "Use Pandas to interpret the datetime format automatically.": [
                "使用Pandas自动解释日期时间格式。"
            ],
            "Decimal Character": [
                "十进制字符"
            ],
            "Character to interpret as decimal point.": [
                "将字符解释为小数点。"
            ],
            "Dataframe Index": [
                "数据帧索引"
            ],
            "Write dataframe index as a column.": [
                "将数据帧索引写为列。"
            ],
            "Column Label(s)": [
                "列标签"
            ],
            "Column label for index column(s). If None is given and Dataframe Index is True, Index Names are used.": [
                "索引列的列标签。如果没有给定索引，且数据帧索引为True，则使用索引名称"
            ],
            "[Superset] Access to the datasource %(name)s was granted": [
                "[Superset] 允许访问数据源 %(name)s"
            ],
            "Viz is missing a datasource": [
                "Viz 缺少一个数据源"
            ],
            "From date cannot be larger than to date": [
                "起始时间不可以大于当前时间"
            ],
            "Table View": [
                "表视图"
            ],
            "Pick a granularity in the Time section or uncheck 'Include Time'": [
                "在“时间”部分选择一个粒度，或取消选中“包括时间”"
            ],
            "Choose either fields to [Group By] and [Metrics] or [Columns], not both": [
                "为[分组]和[指标]或[列]选择任何的字段，或者两个都不选"
            ],
            "Time Table View": [
                "时间表格视图"
            ],
            "Pick at least one metric": [
                "选择至少一个指标"
            ],
            "When using 'Group By' you are limited to use a single metric": [
                "当使用“Group By”时，您只能使用单个指标"
            ],
            "Pivot Table": [
                "透视表"
            ],
            "Please choose at least one 'Group by' field ": [
                "请至少选择一个'Group by'字段"
            ],
            "Please choose at least one metric": [
                "请至少选择一个指标"
            ],
            "Group By' and 'Columns' can't overlap": [
                ""
            ],
            "Markup": [
                "标记"
            ],
            "Separator": [
                "分隔符"
            ],
            "Word Cloud": [
                "词汇云"
            ],
            "Treemap": [
                "树状图"
            ],
            "Calendar Heatmap": [
                "时间热力图"
            ],
            "Box Plot": [
                "箱线图"
            ],
            "Bubble Chart": [
                "气泡图"
            ],
            "Pick a metric for x, y and size": [
                "为 x 轴，y 轴和大小选择一个指标"
            ],
            "Bullet Chart": [
                "子弹图"
            ],
            "Pick a metric to display": [
                "选择一个指标来显示"
            ],
            "Big Number with Trendline": [
                "数字和趋势线"
            ],
            "Pick a metric!": [
                "选择一个指标！"
            ],
            "Big Number": [
                "数字"
            ],
            "Time Series - Line Chart": [
                "时间序列-折线图"
            ],
            "Pick a time granularity for your time series": [
                "为您的时间序列选择一个时间粒度"
            ],
            "`Since` and `Until` time bounds should be specified when using the `Time Shift` feature.": [
                ""
            ],
            "Time Series - Multiple Line Charts": [
                "时间序列-多线图表"
            ],
            "Time Series - Dual Axis Line Chart": [
                "时间序列-双轴线图"
            ],
            "Pick a metric for left axis!": [
                "为左轴选择一个指标！"
            ],
            "Pick a metric for right axis!": [
                "为右轴选择一个指标！"
            ],
            "Please choose different metrics on left and right axis": [
                "请在左右轴上选择不同的指标"
            ],
            "Time Series - Bar Chart": [
                "时间序列 - 柱状图"
            ],
            "Time Series - Period Pivot": [
                "时间序列-周期支点"
            ],
            "Time Series - Percent Change": [
                "时间序列 - 百分比变化"
            ],
            "Time Series - Stacked": [
                "时间序列 - 堆积图"
            ],
            "Distribution - NVD3 - Pie Chart": [
                "分布 - NVD3 - 饼图"
            ],
            "Histogram": [
                "直方图"
            ],
            "Must have at least one numeric column specified": [
                "必须至少指定一个数字列"
            ],
            "Distribution - Bar Chart": [
                "分布 - 柱状图"
            ],
            "Can't have overlap between Series and Breakdowns": [
                "Series 和 Breakdown 之间不能有重叠"
            ],
            "Pick at least one field for [Series]": [
                "为 [序列] 选择至少一个字段"
            ],
            "Sunburst": [
                "环状层次图"
            ],
            "Sankey": [
                "蛇形图"
            ],
            "Pick exactly 2 columns as [Source / Target]": [
                "为 [来源 / 目标] 选择两个列"
            ],
            "There's a loop in your Sankey, please provide a tree. Here's a faulty link: {}": [
                "桑基图里面有一个循环，请提供一棵树。这是一个错误的链接：{}"
            ],
            "Directed Force Layout": [
                "有向图"
            ],
            "Pick exactly 2 columns to 'Group By'": [
                "为 “Group By” 选择两个列"
            ],
            "Country Map": [
                "国家地图"
            ],
            "World Map": [
                "世界地图"
            ],
            "Filters": [
                "过滤"
            ],
            "Pick at least one filter field": [
                "选择至少一个过滤字段"
            ],
            "iFrame": [
                "内嵌框架"
            ],
            "Parallel Coordinates": [
                "平行坐标"
            ],
            "Heatmap": [
                "热力图"
            ],
            "Horizon Charts": [
                "水平图"
            ],
            "Mapbox": [
                "箱图"
            ],
            "Must have a [Group By] column to have 'count' as the [Label]": [
                "[Group By] 列必须要有 ‘count’字段作为 [标签]"
            ],
            "Choice of [Label] must be present in [Group By]": [
                "[标签] 的选择项必须出现在 [Group By]"
            ],
            "Choice of [Point Radius] must be present in [Group By]": [
                "[点半径] 的选择项必须出现在 [Group By]"
            ],
            "[Longitude] and [Latitude] columns must be present in [Group By]": [
                "[经度] 和 [纬度] 的选择项必须出现在 [Group By]"
            ],
            "Deck.gl - Multiple Layers": [
                ""
            ],
            "Bad spatial key": [
                ""
            ],
            "Deck.gl - Scatter plot": [
                ""
            ],
            "Deck.gl - Screen Grid": [
                ""
            ],
            "Deck.gl - 3D Grid": [
                ""
            ],
            "Deck.gl - Paths": [
                ""
            ],
            "Deck.gl - Polygon": [
                ""
            ],
            "Deck.gl - 3D HEX": [
                ""
            ],
            "Deck.gl - GeoJSON": [
                ""
            ],
            "Deck.gl - Arc": [
                ""
            ],
            "Event flow": [
                "事件流"
            ],
            "Time Series - Paired t-test": [
                "时间序列 - 配对t检验"
            ],
            "Time Series - Nightingale Rose Chart": [
                "时间序列-夜莺玫瑰图"
            ],
            "Partition Diagram": [
                "分区图"
            ],
            "Your session timed out, please refresh your page and try again.": [
                "您的会话已超时，请刷新页面后，再重试。"
            ],
            "Your query was saved": [
                "您的查询已保存"
            ],
            "Your query could not be saved": [
                "您的查询无法保存"
            ],
            "Failed at retrieving results from the results backend": [
                "无法从结果后端检索到"
            ],
            "Unknown error": [
                "未知的错误"
            ],
            "Query was stopped.": [
                "查询被终止。"
            ],
            "Failed at stopping query.": [
                "无法终止查询。"
            ],
            "Error occurred while fetching table metadata": [
                "获取表格元数据时发生错误"
            ],
            "shared query": [
                "已分享的查询"
            ],
            "The query couldn't be loaded": [
                "这个查询无法被加载"
            ],
            "An error occurred while creating the data source": [
                "创建数据源时发生错误"
            ],
            "Pick a chart type!": [
                "选择一个图表类型！"
            ],
            "To use this chart type you need at least one column flagged as a date": [
                "要使用此图表类型，您至少需要一个标记为日期格式的列"
            ],
            "To use this chart type you need at least one dimension": [
                "要使用此图表类型，您至少需要一个维度"
            ],
            "To use this chart type you need at least one aggregation function": [
                "要使用这种图表类型，您至少需要一个聚合函数"
            ],
            "Untitled Query": [
                "未命名的查询"
            ],
            "Copy of %s": [
                "%s 的副本"
            ],
            "share query": [
                "分享查询"
            ],
            "copy URL to clipboard": [
                "拷贝 URL 到剪切板"
            ],
            "Raw SQL": [
                "行 SQL"
            ],
            "Source SQL": [
                "源 SQL"
            ],
            "SQL": [
                "SQL"
            ],
            "No query history yet...": [
                "暂无历史查询..."
            ],
            "It seems you don't have access to any database": [
                "貌似您没有访问到任何数据库"
            ],
            "Search Results": [
                "搜索结果"
            ],
            "[From]-": [
                "[From]-"
            ],
            "[To]-": [
                "[To]-"
            ],
            "[Query Status]": [
                "[查询状态]"
            ],
            "Search": [
                "搜索"
            ],
            "Open in SQL Editor": [
                "在 SQL 编辑器中打开"
            ],
            "view results": [
                "展示结果"
            ],
            "Data preview": [
                "数据预览"
            ],
            "Visualize the data out of this query": [
                "从这个查询中可视化数据"
            ],
            "Overwrite text in editor with a query on this table": [
                "使用该表上的查询覆盖编辑器中的文本"
            ],
            "Run query in a new tab": [
                "在新标签中运行查询"
            ],
            "Remove query from log": [
                "从日志中删除查询"
            ],
            ".CSV": [
                ".CSV"
            ],
            "Visualize": [
                "可视化"
            ],
            "Table": [
                "表"
            ],
            "was created": [
                "已创建"
            ],
            "Query in a new tab": [
                "在新标签中查询"
            ],
            "Fetch data preview": [
                "获取数据预览"
            ],
            "Track Job": [
                "跟踪任务"
            ],
            "Loading...": [
                "加载中..."
            ],
            "Run Selected Query": [
                "运行选定的查询"
            ],
            "Run Query": [
                "运行查询"
            ],
            "Run query synchronously": [
                "同步运行查询"
            ],
            "Run query asynchronously": [
                "异步运行查询"
            ],
            "Stop": [
                "停止"
            ],
            "Undefined": [
                "未命名"
            ],
            "Label": [
                "标签"
            ],
            "Label for your query": [
                "为您的查询设置标签"
            ],
            "Description": [
                "描述"
            ],
            "Write a description for your query": [
                "为您的查询写一段描述"
            ],
            "Save": [
                "保存"
            ],
            "Cancel": [
                "取消"
            ],
            "Save Query": [
                "保存查询"
            ],
            "Share Query": [
                "分享查询"
            ],
            "Run a query to display results here": [
                "运行一个查询，以在此显示结果"
            ],
            "Preview for %s": [
                "预览 %s"
            ],
            "Results": [
                "结果"
            ],
            "Query History": [
                "历史查询"
            ],
            "Create table as with query results": [
                "与查询结果一样创建表"
            ],
            "new table name": [
                "新表名称"
            ],
            "Error while fetching table list": [
                "获取表列表时出错"
            ],
            "Error while fetching schema list": [
                "获取模式列表时出错"
            ],
            "Type to search ...": [
                "键入搜索 ..."
            ],
            "Select table ": [
                "查询表"
            ],
            "Error while fetching database list": [
                "获取数据库列表时出错"
            ],
            "Database:": [
                "数据库："
            ],
            "Select a database": [
                "选择一个数据库"
            ],
            "Select a schema (%s)": [
                "选择一个模式（%s）"
            ],
            "Schema:": [
                "模式："
            ],
            "Add a table (%s)": [
                "增加一张表（%s）"
            ],
            "Reset State": [
                "状态重置"
            ],
            "Enter a new title for the tab": [
                "输入标签的新标题"
            ],
            "Untitled Query %s": [
                "未命名的查询 %s"
            ],
            "close tab": [
                "关闭标签"
            ],
            "rename tab": [
                "重命名标签"
            ],
            "expand tool bar": [
                "展开工具栏"
            ],
            "hide tool bar": [
                "隐藏工具栏"
            ],
            "Copy partition query to clipboard": [
                "将分区查询复制到剪贴板"
            ],
            "latest partition:": [
                "最新分区："
            ],
            "Keys for table": [
                "表的键"
            ],
            "View keys & indexes (%s)": [
                "查看键和索引（%s）"
            ],
            "Sort columns alphabetically": [
                "对列按字母顺序进行排列"
            ],
            "Original table column order": [
                "原始表列顺序"
            ],
            "Copy SELECT statement to clipboard": [
                "将 SELECT 语句复制到剪贴板"
            ],
            "Remove table preview": [
                "删除表格预览"
            ],
            "Template Parameters": [
                "模板参数"
            ],
            "Edit template parameters": [
                "编辑模板参数"
            ],
            "Invalid JSON": [
                "无效的JSON"
            ],
            "%s is not right as a column name, please alias it (as in SELECT count(*) ": [
                ""
            ],
            "AS my_alias": [
                "作为 my_alias"
            ],
            "using only alphanumeric characters and underscores": [
                "只使用字母、数字、字符和下划线"
            ],
            "Creating a data source and popping a new tab": [
                "创建数据源，并弹出一个新的标签页"
            ],
            "No results available for this query": [
                "没有可用于此查询的结果"
            ],
            "Chart Type": [
                "图表类型"
            ],
            "[Chart Type]": [
                "[图表类型]"
            ],
            "Datasource Name": [
                "数据库名称"
            ],
            "datasource name": [
                "数据库名称"
            ],
            "Create a new chart": [
                "创建一个新图表"
            ],
            "Choose a datasource": [
                "选择一个数据源"
            ],
            "If the datasource your are looking for is not available in the list, follow the instructions on the how to add it on the ": [
                ""
            ],
            "Superset tutorial": [
                "Superset 教程"
            ],
            "Choose a visualization type": [
                "选择可视化类型"
            ],
            "Create new chart": [
                "创建新表"
            ],
            "Unexpected error: ": [
                "意想不到的错误"
            ],
            "Unexpected error.": [
                "意想不到的错误"
            ],
            "Updating chart was stopped": [
                "更新图表已停止"
            ],
            "An error occurred while rendering the visualization: %s": [
                "渲染可视化时发生错误：%s"
            ],
            "visualization queries are set to timeout at ${action.timeout} seconds. ": [
                "可视化查询设置超时 ${action.timeout} seconds."
            ],
            "Perhaps your data has grown, your database is under unusual load, or you are simply querying a data source that is too large to be processed within the timeout range. If that is the case, we recommend that you summarize your data further.": [
                "也许您的数据增长了，您的数据库负载异常，或者您只是查询一个在超时值范围内无法处理的数据源。如果是这样，我们建议您进一步总结您的数据。"
            ],
            "Network error.": [
                "网络异常。"
            ],
            "Click to see difference": [
                "点击查看差异"
            ],
            "Altered": [
                ""
            ],
            "Chart changes": [
                ""
            ],
            "Select ...": [
                "选择 ..."
            ],
            "Loaded data cached": [
                "数据缓存已加载"
            ],
            "Loaded from cache": [
                "从缓存中加载"
            ],
            "Click to force-refresh": [
                "点击强制刷新"
            ],
            "Copy to clipboard": [
                "复制到剪贴板"
            ],
            "Not successful": [
                "未成功"
            ],
            "Sorry, your browser does not support copying. Use Ctrl / Cmd + C!": [
                "抱歉，您的浏览器不支持复制操作。使用 Ctrl / Cmd + C！"
            ],
            "Copied!": [
                "复制成功！"
            ],
            "Title": [
                "标题"
            ],
            "click to edit title": [
                "点击编辑标题"
            ],
            "You don't have the rights to alter this title.": [
                "你没有权利改变这个标题。"
            ],
            "Click to favorite/unfavorite": [
                "点击 收藏/取消收藏"
            ],
            "Dismiss": [
                "驳回"
            ],
            "%s%s": [
                ""
            ],
            "Active Dashboard Filters": [
                "活跃的仪表板过滤器"
            ],
            "Checkout this dashboard: %s": [
                "查看这个仪表板：%s"
            ],
            "Save as": [
                "另存为"
            ],
            "Force Refresh": [
                "强制刷新"
            ],
            "Force refresh the whole dashboard": [
                "强制刷新整个仪表板"
            ],
            "Set autorefresh": [
                "设置自动刷新"
            ],
            "Set the auto-refresh interval for this session": [
                "设置此会话的自动刷新间隔"
            ],
            "Save the dashboard": [
                "保存仪表板"
            ],
            "Edit properties": [
                "编辑属性"
            ],
            "Edit the dashboards's properties": [
                "编辑仪表板的属性"
            ],
            "Email": [
                "邮件"
            ],
            "Email a link to this dashboard": [
                "用电子邮件发送到这个仪表盘的链接"
            ],
            "Add Charts": [
                "添加图表"
            ],
            "Add some charts to this dashboard": [
                "向这个仪表板添加一些图表"
            ],
            "Edit CSS": [
                "编辑 CSS"
            ],
            "Change the style of the dashboard using CSS code": [
                "使用CSS代码更改仪表板的样式"
            ],
            "Load a template": [
                "加载一个模板"
            ],
            "Load a CSS template": [
                "加载一个 CSS 模板"
            ],
            "CSS": [
                "CSS"
            ],
            "Live CSS Editor": [
                "现场 CSS 编辑器"
            ],
            "You have unsaved changes.": [
                "您有一些未保存的修改。"
            ],
            "Unsaved changes": [
                "未保存的更改"
            ],
            "Don't refresh": [
                "不要刷新"
            ],
            "10 seconds": [
                "10秒钟"
            ],
            "30 seconds": [
                "30秒钟"
            ],
            "1 minute": [
                "1分钟"
            ],
            "5 minutes": [
                "5分钟"
            ],
            "30 minutes": [
                "30分钟"
            ],
            "1 hour": [
                "1小时"
            ],
            "6 hours": [
                "6小时"
            ],
            "12 hours": [
                "12小时"
            ],
            "24 hours": [
                "24小时"
            ],
            "Refresh Interval": [
                "刷新间隔"
            ],
            "Choose the refresh frequency for this dashboard": [
                "选择此仪表板的刷新频率"
            ],
            "This dashboard was saved successfully.": [
                "该仪表板已成功保存。"
            ],
            "Sorry, there was an error saving this dashboard: ": [
                "抱歉，保存此信息中心时发生错误："
            ],
            "Error": [
                "异常"
            ],
            "You must pick a name for the new dashboard": [
                "您必须为新的仪表板选择一个名称"
            ],
            "Save Dashboard": [
                "保存仪表板"
            ],
            "Overwrite Dashboard [%s]": [
                "覆盖仪表板 [%s]"
            ],
            "Save as:": [
                "另存为："
            ],
            "[dashboard name]": [
                "[看板名称]"
            ],
            "Sorry, there was an error fetching charts to this dashboard: ": [
                "对不起，在此仪表板上取图表时出错:"
            ],
            "Sorry, there was an error adding charts to this dashboard: ": [
                "对不起，添加图表到这个仪表板有一个错误:"
            ],
            "Name": [
                "名字"
            ],
            "Viz": [
                "Viz"
            ],
            "Datasource": [
                "数据源"
            ],
            "Modified": [
                "已修改"
            ],
            "Add a new chart to the dashboard": [
                "向看板添加一个新图表"
            ],
            "Add Charts to Dashboard": [
                "向看板添加图表"
            ],
            "Served from data cached %s . Click to force refresh.": [
                "从缓存的数据 %s 中提供。单击以强制刷新。"
            ],
            "Force refresh data": [
                "强制刷新数据"
            ],
            "Annotation layers are still loading.": [
                "注释层仍在加载中。"
            ],
            "One ore more annotation layers failed loading.": [
                "一个或多个注释层加载失败。"
            ],
            "Move chart": [
                "移动图表"
            ],
            "Toggle chart description": [
                "切换图表说明"
            ],
            "Edit chart": [
                "编辑图表"
            ],
            "Export CSV": [
                "导出 CSV"
            ],
            "Explore chart": [
                "探索图表"
            ],
            "Remove chart from dashboard": [
                "从仪表板中删除图表"
            ],
            "A reference to the [Time] configuration, taking granularity into account": [
                "参考 [时间] 配置，考虑粒度"
            ],
            "Group by": [
                "分组"
            ],
            "One or many controls to group by": [
                "一个或多个控件来分组"
            ],
            "Metrics": [
                "指标"
            ],
            "One or many metrics to display": [
                "一个或多个指标显示"
            ],
            "Metric": [
                "指标"
            ],
            "For more information about objects are in context in the scope of this function, refer to the": [
                "有关此函数范围内的对象的更多信息，请参阅"
            ],
            " source code of Superset's sandboxed parser": [
                "Superset沙盒解析器的源代码"
            ],
            "This functionality is disabled in your environment for security reasons.": [
                "出于安全原因，此功能在您的环境中禁用。"
            ],
            "Visualization Type": [
                "图表类型"
            ],
            "The type of visualization to display": [
                "要显示的可视化类型"
            ],
            "Percentage Metrics": [
                "比例指标"
            ],
            "Metrics for which percentage of total are to be displayed": [
                "显示总数百分比的指标"
            ],
            "Y Axis Bounds": [
                "Y 轴界限"
            ],
            "Bounds for the Y axis. When left empty, the bounds are dynamically defined based on the min/max of the data. Note that this feature will only expand the axis range. It won't narrow the data's extent.": [
                "Y轴的边界。当空时，边界是根据数据的最小/最大值动态定义的。请注意，此功能只会扩展轴范围。它不会缩小数据范围。"
            ],
            "Ordering": [
                "订购"
            ],
            "Fixed Color": [
                "固定的颜色"
            ],
            "Use this to define a static color for all circles": [
                "用这个来定义所有圆的静态颜色"
            ],
            "Legend Position": [
                "Legend 位置"
            ],
            "Choose the position of the legend": [
                "选择legend位置"
            ],
            "Fill Color": [
                "填充颜色"
            ],
            " Set the opacity to 0 if you do not want to override the color specified in the GeoJSON": [
                "如果您不想覆盖GeoJSON中指定的颜色，请将不透明度设置为0"
            ],
            "Stroke Color": [
                "中风的颜色"
            ],
            "Right Axis Metric": [
                "右轴指标"
            ],
            "Choose a metric for right axis": [
                "为右轴选择一个指标"
            ],
            "Stacked Style": [
                "堆积的样式"
            ],
            "Sort X Axis": [
                "X轴排序"
            ],
            "Sort Y Axis": [
                "Y轴排序"
            ],
            "Linear Color Scheme": [
                "线性颜色方案"
            ],
            "Normalize Across": [
                "标准化通过"
            ],
            "Color will be rendered based on a ratio of the cell against the sum of across this criteria": [
                "颜色将根据单元格与整个标准之和的比率来展示"
            ],
            "Horizon Color Scale": [
                "地平线颜色比例"
            ],
            "Defines how the color are attributed.": [
                "定义如何分配颜色。"
            ],
            "Rendering": [
                "渲染"
            ],
            "image-rendering CSS attribute of the canvas object that defines how the browser scales up the image": [
                "图像渲染画布对象的 CSS 属性，它定义了浏览器如何放大图像"
            ],
            "XScale Interval": [
                "X轴刻度间隔"
            ],
            "Number of steps to take between ticks when displaying the X scale": [
                "显示 X 刻度时，在刻度之间表示的步骤数"
            ],
            "YScale Interval": [
                "Y轴刻度间隔"
            ],
            "Number of steps to take between ticks when displaying the Y scale": [
                "显示 Y 刻度时，在刻度之间表示的步骤数"
            ],
            "Include Time": [
                "包括时间"
            ],
            "Whether to include the time granularity as defined in the time section": [
                "是否包含时间段中定义的时间粒度"
            ],
            "Auto Zoom": [
                "自动缩放"
            ],
            "When checked, the map will zoom to your data after each query": [
                "当检查时，在每次查询之后，映射将缩放到您的数据"
            ],
            "Show percentage": [
                "显示比例"
            ],
            "Whether to include the percentage in the tooltip": [
                "是否在工具提示中包含百分比"
            ],
            "Stacked Bars": [
                "堆叠条形图"
            ],
            "Show totals": [
                "显示总计"
            ],
            "Display total row/column": [
                "显示总行 / 列"
            ],
            "Show Markers": [
                "显示标记"
            ],
            "Show data points as circle markers on the lines": [
                "将数据点显示为线条上的圆形标记"
            ],
            "Bar Values": [
                "条形栏的值"
            ],
            "Show the value on top of the bar": [
                "显示栏上的值"
            ],
            "Sort Bars": [
                "排序条形栏"
            ],
            "Sort bars by x labels.": [
                "按 x 标签排序。"
            ],
            "Combine Metrics": [
                "整合指标"
            ],
            "Display metrics side by side within each column, as opposed to each column being displayed side by side for each metric.": [
                "在每个列中并排显示指标，而不是每个指标并排显示每个列。"
            ],
            "Extra Controls": [
                "额外的控制"
            ],
            "Whether to show extra controls or not. Extra controls include things like making mulitBar charts stacked or side by side.": [
                "是否显示额外的控件。额外的控制包括像使多列柱状图堆叠或并排。"
            ],
            "Reduce X ticks": [
                "减少 X 轴的刻度"
            ],
            "Reduces the number of X axis ticks to be rendered. If true, the x axis wont overflow and labels may be missing. If false, a minimum width will be applied to columns and the width may overflow into an horizontal scroll.": [
                "减少要渲染的 X 轴刻度的数量。如果为 true，则 X 轴不会溢出，标签可能会丢失。如果为 false，则最小宽度将应用于列，并且宽度可能会溢出，并以水平滚动条展示。"
            ],
            "Include Series": [
                "包括序列"
            ],
            "Include series name as an axis": [
                "包含序列名称作为一个轴"
            ],
            "Color Metric": [
                "颜色指标"
            ],
            "A metric to use for color": [
                "用于颜色的指标"
            ],
            "Country Name": [
                "国家的名字"
            ],
            "The name of country that Superset should display": [
                "Superset 应显示的国家名称"
            ],
            "Country Field Type": [
                "国家字段的类型"
            ],
            "The country code standard that Superset should expect to find in the [country] column": [
                "Superset 希望能够在 [国家] 栏中找到的 国家 / 地区 的标准代码"
            ],
            "Frequency": [
                "频率"
            ],
            "The periodicity over which to pivot time. Users can provide\n      \"Pandas\" offset alias.\n      Click on the info bubble for more details on accepted \"freq\" expressions.": [
                ""
            ],
            "Dimension": [
                "维度"
            ],
            "Select a dimension": [
                "选择一个维度"
            ],
            "Columns": [
                "列"
            ],
            "One or many controls to pivot as columns": [
                "一个或多个控件作为主列"
            ],
            "Columns to display": [
                "要显示的列"
            ],
            "Longitude & Latitude": [
                "经纬度"
            ],
            "Point to your spatial columns": [
                "指向您的空间列"
            ],
            "Start Longitude & Latitude": [
                "开始经纬度"
            ],
            "End Longitude & Latitude": [
                "结束经纬度"
            ],
            "Longitude": [
                "经度"
            ],
            "Select the longitude column": [
                "选择经度列"
            ],
            "Latitude": [
                "纬度"
            ],
            "Select the latitude column": [
                "选择纬度列"
            ],
            "GeoJson Column": [
                "GeoJson列"
            ],
            "Select the geojson column": [
                "选择geojson列"
            ],
            "Polygon Column": [
                "多边形列"
            ],
            "Select the polygon column. Each row should contain JSON.array(N) of [longitude, latitude] points": [
                "选择多边形列。每行应该包含[经度，纬度]点的JSON.array(N)"
            ],
            "Point Radius Scale": [
                "点半径范围"
            ],
            "Stroke Width": [
                "笔划宽度"
            ],
            "Origin": [
                "起点"
            ],
            "Defines the origin where time buckets start, accepts natural dates as in `now`, `sunday` or `1970-01-01`": [
                "定义时间桶的起点，接受 `now`，`sunday` 或 `1970-01-01` 的自然日期"
            ],
            "Bottom Margin": [
                "底部边距"
            ],
            "Bottom margin, in pixels, allowing for more room for axis labels": [
                "底部边距，以像素为单位，为轴标签留出更多空间"
            ],
            "X Tick Layout": [
                "X勾画布局"
            ],
            "The way the ticks are laid out on the X axis": [
                "刻度线在X轴上的排列方式"
            ],
            "Left Margin": [
                "左边距"
            ],
            "Left margin, in pixels, allowing for more room for axis labels": [
                "左边距，以像素为单位，为轴标签留出更多空间"
            ],
            "Time Granularity": [
                "可视化的时间粒度"
            ],
            "The time granularity for the visualization. Note that you can type and use simple natural language as in `10 seconds`, `1 day` or `56 weeks`": [
                "可视化的时间粒度。请注意，您可以输入和使用简单的自然语言，如 `10 秒`，`1 天` 或 `56 周`"
            ],
            "Domain": [
                "域"
            ],
            "The time unit used for the grouping of blocks": [
                "用于块分组的时间单位"
            ],
            "Subdomain": [
                "子域"
            ],
            "The time unit for each block. Should be a smaller unit than domain_granularity. Should be larger or equal to Time Grain": [
                "每个块的时间单位。应该是比 domain_granularity 更小的单位。应该大于或等于 Time Grain"
            ],
            "Link Length": [
                "链接长度"
            ],
            "Link length in the force layout": [
                "在力布局中的链接长度"
            ],
            "Charge": [
                "充电"
            ],
            "Charge in the force layout": [
                "在力布局中充电"
            ],
            "The time column for the visualization. Note that you can define arbitrary expression that return a DATETIME column in the table. Also note that the filter below is applied against this column or expression": [
                "可视化的时间列。注意，您可以定义返回表中的DATETIME列的任意表达式。还要注意，下面的过滤器是应用于这个列或表达式的"
            ],
            "Time Grain": [
                "时间的粒度"
            ],
            "The time granularity for the visualization. This applies a date transformation to alter your time column and defines a new time granularity. The options here are defined on a per database engine basis in the Superset source code.": [
                "可视化的时间粒度。这将应用日期转换来更改时间列，并定义新的时间粒度。这里的选项是在 Superset 源代码中的每个数据库引擎基础上定义的。"
            ],
            "Resample Rule": [
                "重新取样规则"
            ],
            "Pandas resample rule": [
                "Pandas 重新采样的规则"
            ],
            "Resample How": [
                "如何重新采样"
            ],
            "Pandas resample how": [
                "Pandas 如何重新采样的规则"
            ],
            "Resample Fill Method": [
                "重新采样的填充方法"
            ],
            "Pandas resample fill method": [
                "Pandas 重新采样的填充方法"
            ],
            "Since": [
                "以来"
            ],
            "7 days ago": [
                "7 天前"
            ],
            "Until": [
                "直到"
            ],
            "Max Bubble Size": [
                "最大泡泡的尺寸"
            ],
            "Whisker/outlier options": [
                "（箱须图的）须 / 异常值选项"
            ],
            "Determines how whiskers and outliers are calculated.": [
                "确定如何计算（箱须图的）胡须和异常值。"
            ],
            "Ratio": [
                "比率"
            ],
            "Target aspect ratio for treemap tiles.": [
                "树形图中瓦片的目标高宽比。"
            ],
            "Number format": [
                "数字格式"
            ],
            "Row limit": [
                "行限制"
            ],
            "Series limit": [
                "序列限制"
            ],
            "Limits the number of time series that get displayed. A sub query (or an extra phase where sub queries are not supported) is applied to limit the number of time series that get fetched and displayed. This feature is useful when grouping by high cardinality dimension(s).": [
                "限制显示的时间序列的数量。应用子查询(或不支持子查询的额外阶段)来限制获取和显示的时间序列的数量。这个特性在根据高基数维进行分组时非常有用。"
            ],
            "Sort By": [
                "Sort By（以什么排序）"
            ],
            "Metric used to define the top series": [
                "用于定义顶级序列的指标"
            ],
            "Sort Descending": [
                "降序"
            ],
            "Whether to sort descending or ascending": [
                "是降序排序还是升序排序"
            ],
            "Rolling": [
                "滚动"
            ],
            "Defines a rolling window function to apply, works along with the [Periods] text box": [
                "定义要应用的滚动窗口函数，与 [Periods] 文本框一起使用"
            ],
            "Multiplier": [
                "增加(Multiplier)"
            ],
            "Factor to multiply the metric by": [
                "乘以度规的因子"
            ],
            "Periods": [
                "期限"
            ],
            "Defines the size of the rolling window function, relative to the time granularity selected": [
                "定义滚动窗口函数的大小，相对于所选的时间粒度"
            ],
            "Cell Size": [
                ""
            ],
            "The size of the square cell, in pixels": [
                "正方形单元格的大小(以像素为单位)"
            ],
            "Cell Padding": [
                ""
            ],
            "The distance between cells, in pixels": [
                "单元格之间的距离，以像素为单位"
            ],
            "Cell Radius": [
                ""
            ],
            "The pixel radius": [
                "像素半径"
            ],
            "Color Steps": [
                "颜色的步骤"
            ],
            "The number color \"steps\"": [
                ""
            ],
            "Grid Size": [
                "网格大小"
            ],
            "Defines the grid size in pixels": [
                "以像素为单位定义网格大小"
            ],
            "Min Periods": [
                "最小的期限"
            ],
            "The minimum number of rolling periods required to show a value. For instance if you do a cumulative sum on 7 days you may want your \"Min Period\" to be 7, so that all data points shown are the total of 7 periods. This will hide the \"ramp up\" taking place over the first 7 periods": [
                "显示值所需的滚动周期的最小数量。例如，如果您想累积 7 天的总额，您可能希望您的“最短期限”为 7，以便显示的所有数据点都是 7 个期间的总和。这将隐藏掉前 7 个阶段的“加速”效果"
            ],
            "Series": [
                "序列"
            ],
            "Defines the grouping of entities. Each series is shown as a specific color on the chart and has a legend toggle": [
                "定义实体的分组。每个系列在图表上显示为特定颜色，并有一个可切换的图例"
            ],
            "Entity": [
                "实体"
            ],
            "This defines the element to be plotted on the chart": [
                "这定义了要在图表上绘制的元素"
            ],
            "X Axis": [
                "X 轴"
            ],
            "Metric assigned to the [X] axis": [
                "分配给 [X] 轴的指标"
            ],
            "Y Axis": [
                "Y 轴"
            ],
            "Metric assigned to the [Y] axis": [
                "分配给 [Y] 轴的指标"
            ],
            "Bubble Size": [
                "泡泡大小"
            ],
            "URL": [
                "URL 地址"
            ],
            "The URL, this control is templated, so you can integrate {{ width }} and/or {{ height }} in your URL string.": [
                "URL 网址，此控件是模板化的，所以您可以在您的网址字符串中整合 {{ width }} 和 / 或 {{ height }}。"
            ],
            "X Axis Label": [
                "X 轴标签"
            ],
            "Y Axis Label": [
                "Y 轴标签"
            ],
            "Custom WHERE clause": [
                "自定义 WHERE 子句"
            ],
            "The text in this box gets included in your query's WHERE clause, as an AND to other criteria. You can include complex expression, parenthesis and anything else supported by the backend it is directed towards.": [
                "此框中的文本被包含在查询的 WHERE 子句中，作为与其他条件的 AND 关联。你可以包含复杂的表达式、圆括号和任何后端支持的其他东西。"
            ],
            "Custom HAVING clause": [
                "自定义 HAVING 子句"
            ],
            "The text in this box gets included in your query's HAVING clause, as an AND to other criteria. You can include complex expression, parenthesis and anything else supported by the backend it is directed towards.": [
                "此框中的文本被包含在查询的 HAVING 子句中，作为与其他条件的 AND 关联。你可以包含复杂的表达式、圆括号和任何后端支持的其他东西。"
            ],
            "Comparison Period Lag": [
                "比较期延迟"
            ],
            "Based on granularity, number of time periods to compare against": [
                "根据粒度，比较的时间段数量"
            ],
            "Comparison suffix": [
                "比较后缀"
            ],
            "Suffix to apply after the percentage display": [
                "在显示百分比后应用后缀"
            ],
            "Table Timestamp Format": [
                "表时间戳格式"
            ],
            "Timestamp Format": [
                "时间戳格式"
            ],
            "Series Height": [
                "序列高度"
            ],
            "Pixel height of each series": [
                "每个序列的像素高度"
            ],
            "Page Length": [
                "页面长度"
            ],
            "Rows per page, 0 means no pagination": [
                "每页行数，0 表示没有分页"
            ],
            "X Axis Format": [
                "X 轴格式"
            ],
            "Y Axis Format": [
                "Y 轴格式"
            ],
            "When `Period Ratio` is set, the Y Axis Format is forced to `.1%`": [
                ""
            ],
            "Right Axis Format": [
                "右轴格式"
            ],
            "Date Time Format": [
                "日期时间格式"
            ],
            "Markup Type": [
                "Markup 格式"
            ],
            "Pick your favorite markup language": [
                "选择您最爱的 Markup 语言"
            ],
            "Rotation": [
                "反转"
            ],
            "Rotation to apply to words in the cloud": [
                "旋转适用于云中的单词"
            ],
            "Line Style": [
                "线条样式"
            ],
            "Line interpolation as defined by d3.js": [
                "由 d3.js 定义的线插值"
            ],
            "Label Type": [
                "标签类型"
            ],
            "What should be shown on the label?": [
                "什么应该被显示在标签上？"
            ],
            "Code": [
                "代码"
            ],
            "Put your code here": [
                "把您的代码放在这里"
            ],
            "Aggregation function": [
                "聚合功能"
            ],
            "Aggregate function to apply when pivoting and computing the total rows and columns": [
                "在旋转和计算总的行和列时，应用聚合函数"
            ],
            "Font Size From": [
                "字型大小从"
            ],
            "Font size for the smallest value in the list": [
                "列表中最小值的字体大小"
            ],
            "Font Size To": [
                "字型大小到"
            ],
            "Font size for the biggest value in the list": [
                "列表中最大值的字体大小"
            ],
            "Instant Filtering": [
                "即时过滤"
            ],
            "Extruded": [
                "挤压(Extruded)"
            ],
            "Show Range Filter": [
                "显示范围过滤器"
            ],
            "Whether to display the time range interactive selector": [
                "是否显示时间范围交互选择器"
            ],
            "Date Filter": [
                "日期过滤器"
            ],
            "Whether to include a time filter": [
                "是否包含时间过滤器"
            ],
            "Show SQL Granularity Dropdown": [
                "显示SQL粒度下拉列表"
            ],
            "Check to include SQL Granularity dropdown": [
                "检查是否包含SQL粒度下拉列表"
            ],
            "Show SQL Time Column": [
                "显示SQL时间列"
            ],
            "Check to include Time Column dropdown": [
                "检查包括时间列下拉菜单"
            ],
            "Show Druid Granularity Dropdown": [
                "显示Druid粒度下拉列表"
            ],
            "Check to include Druid Granularity dropdown": [
                "检查是否包含Druid粒度下拉列表"
            ],
            "Show Druid Time Origin": [
                "显示Druid的时间起源"
            ],
            "Check to include Time Origin dropdown": [
                "检查包括时间原点下拉菜单"
            ],
            "Data Table": [
                "数据表"
            ],
            "Whether to display the interactive data table": [
                "是否显示交互式数据表"
            ],
            "Search Box": [
                "搜索框"
            ],
            "Whether to include a client side search box": [
                "是否包含客户端搜索框"
            ],
            "Table Filter": [
                "表格过滤器"
            ],
            "Whether to apply filter when table cell is clicked": [
                "是否包含客户端搜索框"
            ],
            "Align +/-": [
                "对齐 +/-"
            ],
            "Whether to align the background chart for +/- values": [
                "是否为+/-值对齐背景图"
            ],
            "Color +/-": [
                "颜色 +/-"
            ],
            "Whether to color +/- values": [
                "是否使用颜色+/-值"
            ],
            "Show Bubbles": [
                "显示泡沫"
            ],
            "Whether to display bubbles on top of countries": [
                "是否要在国家的顶部显示泡沫"
            ],
            "Legend": [
                "图例"
            ],
            "Whether to display the legend (toggles)": [
                "是否显示图例(切换)"
            ],
            "Show Values": [
                "显示值"
            ],
            "Whether to display the numerical values within the cells": [
                "是否显示单元格内的数值"
            ],
            "Show Metric Names": [
                "显示指标名称"
            ],
            "Whether to display the metric name as a title": [
                "是否将度量名称显示为标题"
            ],
            "X bounds": [
                "X范围"
            ],
            "Whether to display the min and max values of the X axis": [
                "是否显示X轴的最小值和最大值"
            ],
            "Y bounds": [
                "Y范围"
            ],
            "Whether to display the min and max values of the Y axis": [
                "是否显示Y轴的最小值和最大值"
            ],
            "Rich Tooltip": [
                "丰富的工具提示"
            ],
            "The rich tooltip shows a list of all series for that point in time": [
                "丰富的工具提示显示了该时间点的所有系列的列表"
            ],
            "Y Log Scale": [
                "Y对数尺度"
            ],
            "Use a log scale for the Y axis": [
                "用对数刻度表示Y轴"
            ],
            "X Log Scale": [
                "对数尺度"
            ],
            "Use a log scale for the X axis": [
                "用对数刻度表示X轴"
            ],
            "Log Scale": [
                "对数尺度"
            ],
            "Use a log scale": [
                "使用对数刻度"
            ],
            "Donut": [
                "环状线圈"
            ],
            "Do you want a donut or a pie?": [
                "你想要环状线圈还是饼图"
            ],
            "Put labels outside": [
                "把标签放在外面"
            ],
            "Put the labels outside the pie?": [
                "把标签放在饼图外面"
            ],
            "Contribution": [
                "贡献"
            ],
            "Compute the contribution to the total": [
                "计算对总数的贡献"
            ],
            "Period Ratio": [
                "时间比"
            ],
            "[integer] Number of period to compare against, this is relative to the granularity selected": [
                "要比较的周期数[integer] ，这是相对于选择的粒度而言的"
            ],
            "Period Ratio Type": [
                "期比率类型"
            ],
            "`factor` means (new/previous), `growth` is ((new/previous) - 1), `value` is (new-previous)": [
                ""
            ],
            "Time Shift": [
                "时移"
            ],
            "Overlay one or more timeseries from a relative time period. Expects relative time deltas in natural language (example:  24 hours, 7 days, 56 weeks, 365 days)": [
                "覆盖一个或多个相对时间段的timeseries。期望自然语言中的相对时间增量(例如:24小时，7天，56周，365天)"
            ],
            "Subheader": [
                "小标题"
            ],
            "Description text that shows up below your Big Number": [
                "显示在大数字下面的描述文本"
            ],
            "label": [
                "标签"
            ],
            "`count` is COUNT(*) if a group by is used. Numerical columns will be aggregated with the aggregator. Non-numerical columns will be used to label points. Leave empty to get a count of points in each cluster.": [
                ""
            ],
            "Map Style": [
                "地图的风格"
            ],
            "Base layer map style": [
                "基本图层样式"
            ],
            "Clustering Radius": [
                "聚类半径"
            ],
            "The radius (in pixels) the algorithm uses to define a cluster. Choose 0 to turn off clustering, but beware that a large number of points (>1000) will cause lag.": [
                "算法用于定义集群的半径(以像素为单位)。选择0关闭集群，但是要注意大量的点(>1000)会导致延迟。"
            ],
            "Point Size": [
                "点的大小"
            ],
            "Fixed point radius": [
                "不动点的半径"
            ],
            "Point Radius": [
                "点的半径"
            ],
            "The radius of individual points (ones that are not in a cluster). Either a numerical column or `Auto`, which scales the point based on the largest cluster": [
                "单个点(不在聚类中的点)的半径。要么是一个数值列，要么是“自动”，它根据最大的星系团来缩放点"
            ],
            "Point Radius Unit": [
                "点半径单位"
            ],
            "The unit of measure for the specified point radius": [
                "指定点半径的度量单位"
            ],
            "Point Unit": [
                "点单位"
            ],
            "Opacity": [
                "不透明度"
            ],
            "Opacity of all clusters, points, and labels. Between 0 and 1.": [
                "所有簇、点和标签的不透明度。在0和1之间。"
            ],
            "Viewport": [
                "视窗"
            ],
            "Parameters related to the view and perspective on the map": [
                "与地图上的视图和透视图相关的参数"
            ],
            "Zoom": [
                "变焦"
            ],
            "Zoom level of the map": [
                "地图的缩放级别"
            ],
            "Default latitude": [
                "默认的纬度"
            ],
            "Latitude of default viewport": [
                "默认视口的纬度"
            ],
            "Default longitude": [
                "默认的经度"
            ],
            "Longitude of default viewport": [
                "默认视图的经度"
            ],
            "Live render": [
                ""
            ],
            "Points and clusters will update as viewport is being changed": [
                "点和集群将随着视口的改变而更新"
            ],
            "RGB Color": [
                "RGB 颜色"
            ],
            "The color for points and clusters in RGB": [
                "点和簇在RGB中的颜色"
            ],
            "Color": [
                "颜色"
            ],
            "Pick a color": [
                "选择一个颜色"
            ],
            "Ranges": [
                "范围"
            ],
            "Ranges to highlight with shading": [
                "阴影和亮度的范围"
            ],
            "Range labels": [
                "范围内的标签"
            ],
            "Labels for the ranges": [
                "范围的标签"
            ],
            "Markers": [
                "标记"
            ],
            "List of values to mark with triangles": [
                "要用三角形标记的值列表"
            ],
            "Marker labels": [
                "标记的标签"
            ],
            "Labels for the markers": [
                "标记的标签"
            ],
            "Marker lines": [
                "标记线"
            ],
            "List of values to mark with lines": [
                "要用行标记的值列表"
            ],
            "Marker line labels": [
                "标记线的标签"
            ],
            "Labels for the marker lines": [
                "标记线的标签"
            ],
            "Chart ID": [
                "图表 ID"
            ],
            "The id of the active chart": [
                "激活图表的id"
            ],
            "Cache Timeout (seconds)": [
                "缓存超时（秒）"
            ],
            "The number of seconds before expiring the cache": [
                "缓存过期前的秒数"
            ],
            "Order by entity id": [
                "按实体id排序"
            ],
            "Important! Select this if the table is not already sorted by entity id, else there is no guarantee that all events for each entity are returned.": [
                "注意!如果表还没有按实体id排序，则选择此选项，否则不能保证返回每个实体的所有事件。"
            ],
            "Minimum leaf node event count": [
                "最小叶节点事件计数"
            ],
            "Leaf nodes that represent fewer than this number of events will be initially hidden in the visualization": [
                "表示小于此数目事件的叶节点最初将隐藏在可视化中"
            ],
            "Color Scheme": [
                "配色方案"
            ],
            "The color scheme for rendering chart": [
                "绘制图表的配色方案"
            ],
            "Significance Level": [
                "显著性水平"
            ],
            "Threshold alpha level for determining significance": [
                "确定重要性的阈值alpha水平"
            ],
            "p-value precision": [
                "p值精度"
            ],
            "Number of decimal places with which to display p-values": [
                "显示p值的小数位数"
            ],
            "Lift percent precision": [
                "提升百分比精度"
            ],
            "Number of decimal places with which to display lift values": [
                "显示升力值的小数位数"
            ],
            "Time Series Columns": [
                "时间序列"
            ],
            "Use Area Proportions": [
                "使用面积比例"
            ],
            "Check if the Rose Chart should use segment area instead of segment radius for proportioning": [
                "检查玫瑰图是否使用分段面积而不是分段半径进行比例"
            ],
            "Options": [
                "选项"
            ],
            "Not Time Series": [
                "不是时间序列"
            ],
            "Ignore time": [
                "忽略时间"
            ],
            "Time Series": [
                "时间序列"
            ],
            "Standard time series": [
                "标准时间序列"
            ],
            "Aggregate Mean": [
                "总体意思"
            ],
            "Mean of values over specified period": [
                "指定期间内值的平均值"
            ],
            "Aggregate Sum": [
                "合计值"
            ],
            "Sum of values over specified period": [
                "指定期间内的值的总和"
            ],
            "Difference": [
                "区别"
            ],
            "Metric change in value from `since` to `until`": [
                "从 since 到 until 值的公制变化"
            ],
            "Percent Change": [
                "变化百分比"
            ],
            "Metric percent change in value from `since` to `until`": [
                "从 since 到 until 值的变化百分比"
            ],
            "Factor": [
                "因素"
            ],
            "Metric factor change from `since` to `until`": [
                "度量因子从since变化到until"
            ],
            "Advanced Analytics": [
                "先进分析"
            ],
            "Use the Advanced Analytics options below": [
                "使用下面的高级分析选项"
            ],
            "Settings for time series": [
                "时间序列设置"
            ],
            "Equal Date Sizes": [
                "相等的日期的大小"
            ],
            "Check to force date partitions to have the same height": [
                "检查以强制日期分区具有相同的高度"
            ],
            "Partition Limit": [
                "分区限制"
            ],
            "The maximum number of subdivisions of each group; lower values are pruned first": [
                "每组的最大细分数;先删除较低的值"
            ],
            "Minimum Radius": [
                "最小半径"
            ],
            "Minimum radius size of the circle, in pixels. As the zoom level changes, this insures that the circle respects this minimum radius.": [
                "圆的最小半径大小，以像素为单位。随着缩放级别的变化，这确保圆尊重这个最小半径。"
            ],
            "Maximum Radius": [
                "最大半径"
            ],
            "Maxium radius size of the circle, in pixels. As the zoom level changes, this insures that the circle respects this maximum radius.": [
                "圆的最大半径大小，以像素为单位。随着缩放级别的变化，这确保圆形尊重这个最大半径。"
            ],
            "Partition Threshold": [
                "分割阈值"
            ],
            "Partitions whose height to parent height proportions are below this value are pruned": [
                "将删除高度与父高度比例低于此值的分区"
            ],
            "Lines column": [
                "线列"
            ],
            "The database columns that contains lines information": [
                "包含行信息的数据库列"
            ],
            "Lines encoding": [
                "行编码"
            ],
            "The encoding format of the lines": [
                "行的编码格式"
            ],
            "Line width": [
                "线宽"
            ],
            "The width of the lines": [
                "线条的宽度"
            ],
            "Line charts": [
                "线图表"
            ],
            "Pick a set of line charts to layer on top of one another": [
                "选择一组折线图，让它们层叠在一起"
            ],
            "Select charts": [
                "选择图表"
            ],
            "Error while fetching charts": [
                "取图时出错"
            ],
            "Right Axis chart(s)": [
                ""
            ],
            "Choose one or more charts for right axis": [
                "选择一个或多个图表作为右轴"
            ],
            "Prefix metric name with slice name": [
                "用切片名称前缀度量名称"
            ],
            "Reverse Lat & Long": [
                ""
            ],
            "deck.gl charts": [
                ""
            ],
            "Pick a set of deck.gl charts to layer on top of one another": [
                ""
            ],
            "Javascript data interceptor": [
                ""
            ],
            "Define a javascript function that receives the data array used in the visualization and is expected to return a modified version of that array. This can be used to alter properties of the data, filter, or enrich the array.": [
                ""
            ],
            "Javascript data mutator": [
                ""
            ],
            "Define a function that receives intercepts the data objects and can mutate it": [
                ""
            ],
            "Javascript tooltip generator": [
                ""
            ],
            "Define a function that receives the input and outputs the content for a tooltip": [
                ""
            ],
            "Javascript onClick href": [
                ""
            ],
            "Define a function that returns a URL to navigate to when user clicks": [
                "定义一个函数，当用户单击时返回要导航的URL"
            ],
            "Extra data for JS": [
                "JS额外数据"
            ],
            "List of extra columns made available in Javascript functions": [
                "Javascript函数中提供的额外列的列表"
            ],
            "Stroked": [
                "笔画"
            ],
            "Whether to display the stroke": [
                "是否显示笔画"
            ],
            "Filled": [
                "装满"
            ],
            "Whether to fill the objects": [
                "是否填充对象"
            ],
            "Normalized": [
                "归一化"
            ],
            "Whether to normalize the histogram": [
                "是否规范直方图"
            ],
            "is expected to be a number": [
                "是number类型"
            ],
            "is expected to be an integer": [
                "是integer类型"
            ],
            "cannot be empty": [
                "不能为空"
            ],
            "Time": [
                "时间"
            ],
            "Time related form attributes": [
                "与时间相关的表单属性"
            ],
            "Datasource & Chart Type": [
                "数据源 & 图表类型"
            ],
            "This section exposes ways to include snippets of SQL in your query": [
                "本节介绍了在查询中包含SQL片段的方法"
            ],
            "Annotations and Layers": [
                ""
            ],
            "Query": [
                "查询"
            ],
            "This section contains options that allow for advanced analytical post processing of query results": [
                "本节包含允许对查询结果进行高级分析后处理的选项"
            ],
            "Result Filters": [
                "结果过滤"
            ],
            "The filters to apply after post-aggregation.Leave the value control empty to filter empty strings or nulls": [
                "在聚合后应用的过滤器。让值控件为空以过滤空字符串或空值。"
            ],
            "Chart Options": [
                "图表选项"
            ],
            "Breakdowns": [
                "故障"
            ],
            "Defines how each series is broken down": [
                "定义如何分解每个系列"
            ],
            "Pie Chart": [
                "饼图"
            ],
            "Y Axis 1": [
                ""
            ],
            "Y Axis 2": [
                ""
            ],
            "Left Axis chart(s)": [
                ""
            ],
            "Choose one or more charts for left axis": [
                "选择一个或多个图表作为左轴"
            ],
            "Left Axis Format": [
                "左轴格式"
            ],
            "Time Series - Periodicity Pivot": [
                "时间序列-周期性支点"
            ],
            "Dual Axis Line Chart": [
                "双轴线图"
            ],
            "Left Axis Metric": [
                "左轴度规"
            ],
            "Choose a metric for left axis": [
                "为左轴选择一个度规"
            ],
            "Map": [
                ""
            ],
            "Deck.gl - Hexagons": [
                ""
            ],
            "Advanced": [
                ""
            ],
            "Height": [
                "高度"
            ],
            "Metric used to control height": [
                ""
            ],
            "Deck.gl - Grid": [
                ""
            ],
            "Deck.gl - Screen grid": [
                ""
            ],
            "Grid": [
                ""
            ],
            "Weight": [
                ""
            ],
            "Metric used as a weight for the grid's coloring": [
                "用作网格着色的重量的公制度量衡"
            ],
            "Deck.gl - GeoJson": [
                ""
            ],
            "GeoJson Settings": [
                ""
            ],
            "Polygon Settings": [
                "多边形的设置"
            ],
            "Arc": [
                "弧"
            ],
            "Point Color": [
                ""
            ],
            "Categorical Color": [
                "分类的颜色"
            ],
            "Pick a dimension from which categorical colors are defined": [
                "选择一个定义分类颜色的维度"
            ],
            "GROUP BY": [
                "分组（GROUP BY）"
            ],
            "Use this section if you want a query that aggregates": [
                "如果想要聚合查询，请使用此部分"
            ],
            "NOT GROUPED BY": [
                "未分组"
            ],
            "Use this section if you want to query atomic rows": [
                "如果您想查询原子行，请使用本节"
            ],
            "Time Series Table": [
                "时间序列表"
            ],
            "Templated link, it's possible to include {{ metric }} or other values coming from the controls.": [
                "模板化链接，可以包含{{ metric }}或来自控件的其他值。"
            ],
            "Pivot Options": [
                "主选择"
            ],
            "Number Format": [
                "数字格式"
            ],
            "Time Format": [
                "时间格式"
            ],
            "Numeric Columns": [
                "数字列"
            ],
            "Select the numeric columns to draw the histogram": [
                "选择数值列来绘制直方图"
            ],
            "No of Bins": [
                ""
            ],
            "Select number of bins for the histogram": [
                "选择用于直方图的箱子数"
            ],
            "Opacity of the bars. Between 0 and 1": [
                "条的不透明度。在0和1之间"
            ],
            "Primary Metric": [
                "主要指标"
            ],
            "The primary metric is used to define the arc segment sizes": [
                "主度规用于定义弧段大小"
            ],
            "Secondary Metric": [
                "二级指标"
            ],
            "[optional] this secondary metric is used to define the color as a ratio against the primary metric. When omitted, the color is categorical and based on labels": [
                ""
            ],
            "Hierarchy": [
                "层次结构"
            ],
            "This defines the level of the hierarchy": [
                "这定义了层次结构的级别"
            ],
            "Source / Target": [
                "源/目标"
            ],
            "Choose a source and a target": [
                "选择一个源和一个目标"
            ],
            "Chord Diagram": [
                "和弦图"
            ],
            "Choose a number format": [
                "选择数字格式"
            ],
            "Source": [
                "源"
            ],
            "Choose a source": [
                "选择一个源"
            ],
            "Target": [
                "目标"
            ],
            "Choose a target": [
                "选择一个目标"
            ],
            "ISO 3166-2 codes of region/province/department": [
                ""
            ],
            "It's ISO 3166-2 of your region/province/department in your table. (see documentation for list of ISO 3166-2)": [
                ""
            ],
            "Bubbles": [
                ""
            ],
            "Country Control": [
                ""
            ],
            "3 letter code of the country": [
                ""
            ],
            "Metric for color": [
                "标准颜色"
            ],
            "Metric that defines the color of the country": [
                "定义country颜色的度量标准"
            ],
            "Bubble size": [
                "气泡大小"
            ],
            "Metric that defines the size of the bubble": [
                "定义气泡大小的度量"
            ],
            "Filter Box": [
                "过滤框"
            ],
            "Filter controls": [
                "过滤器控制"
            ],
            "The controls you want to filter on. Note that only columns checked as \"filterable\" will show up on this list.": [
                ""
            ],
            "Heatmap Options": [
                "热图选项"
            ],
            "Whether to apply a normal distribution based on rank on the color scale": [
                "是否应用基于色度等级的正态分布"
            ],
            "Value bounds": [
                "值范围"
            ],
            "Hard value bounds applied for color coding. Is only relevant and applied when the normalization is applied against the whole heatmap.": [
                "硬值界限应用于颜色编码。仅在对整个热图应用规范化时才相关和应用。"
            ],
            "Value Format": [
                "值的格式"
            ],
            "Horizon": [
                "地平线"
            ],
            "Points": [
                "点"
            ],
            "Labelling": [
                "标签"
            ],
            "Visual Tweaks": [
                "视觉调整"
            ],
            "Column containing longitude data": [
                "包含经度数据的列"
            ],
            "Column containing latitude data": [
                "包含纬度数据的列"
            ],
            "Cluster label aggregator": [
                "集群标签聚合器"
            ],
            "Aggregate function applied to the list of points in each cluster to produce the cluster label.": [
                "应用于每个集群中的点列表的聚合函数，以生成集群标签。"
            ],
            "Tooltip": [
                "提示"
            ],
            "Show a tooltip when hovering over points and clusters describing the label": [
                "鼠标悬停在描述标签的点和簇上时，可以显示对应的提示"
            ],
            "One or many controls to group by. If grouping, latitude and longitude columns must be present.": [
                "使用一个或多个控件来分组。一旦分组，则纬度和经度列必须存在。"
            ],
            "Event definition": [
                "事件定义"
            ],
            "Additional meta data": [
                "额外的元数据"
            ],
            "Column containing entity ids": [
                "包含实体标识的列"
            ],
            "e.g., a \"user id\" column": [
                "包含事件名称的列"
            ],
            "Column containing event names": [
                "包含事件名称的列"
            ],
            "Event count limit": [
                "事件计数限制"
            ],
            "The maximum number of events to return, equivalent to number of rows": [
                "要返回的最大事件数量，相当于行数"
            ],
            "Meta data": [
                "元数据"
            ],
            "Select any columns for meta data inspection": [
                "选择任何列用来对元数据进行探查"
            ],
            "Paired t-test": [
                ""
            ],
            "Time Series Options": [
                "时间序列的选择"
            ],
            "No such column found. To filter on a metric, try the Custom SQL tab.": [
                "没有发现这样的专栏。要过滤指标，请尝试自定义SQL选项卡。"
            ],
            "%s column(s) and metric(s)": [
                ""
            ],
            "%s column(s)": [
                ""
            ],
            "To filter on a metric, use Custom SQL tab.": [
                "要过滤指标，请使用自定义SQL选项卡"
            ],
            "%s operators(s)": [
                ""
            ],
            "type a value here": [
                ""
            ],
            "Filter value": [
                "过滤值"
            ],
            "choose WHERE or HAVING...": [
                ""
            ],
            "%s aggregates(s)": [
                ""
            ],
            "description": [
                "描述"
            ],
            "bolt": [
                "螺栓"
            ],
            "Changing this control takes effect instantly": [
                "更改此控件将立即生效"
            ],
            "Error...": [
                "错误 ..."
            ],
            "Width": [
                "宽度"
            ],
            "Export to .json": [
                "导出到 .json"
            ],
            "Export to .csv format": [
                "导出为 .csv 格式"
            ],
            "%s - untitled": [
                "%s  - 无标题"
            ],
            "Edit chart properties": [
                "编辑图表属性"
            ],
            "Limit reached": [
                "达到限制"
            ],
            "Please enter a chart name": [
                "请输入图表名称"
            ],
            "Please select a dashboard": [
                "请选择一个仪表板"
            ],
            "Please enter a dashboard name": [
                "请输入仪表板名称"
            ],
            "Save A Chart": [
                "保存图表"
            ],
            "Overwrite chart %s": [
                "覆盖图表 %s"
            ],
            "[chart name]": [
                ""
            ],
            "Do not add to a dashboard": [
                "不要添加到仪表板"
            ],
            "Add chart to existing dashboard": [
                "向现有看板添加图表"
            ],
            "Add to new dashboard": [
                "添加到新的仪表板"
            ],
            "Save & go to dashboard": [
                "保存并转到看板"
            ],
            "choose a column or metric": [
                "选择一个列或度量"
            ],
            "Add Annotation Layer": [
                "添加注释层"
            ],
            "`Min` value should be numeric or empty": [
                "最小值应该是数字或空的"
            ],
            "`Max` value should be numeric or empty": [
                "最大值应该是数字或空的"
            ],
            "Min": [
                "最小值"
            ],
            "Max": [
                "最大值"
            ],
            "Something went wrong while fetching the datasource list": [
                "提取数据源列表时出错"
            ],
            "Select a datasource": [
                "选择一个数据源"
            ],
            "Search / Filter": [
                "搜索 / 过滤"
            ],
            "Click to point to another datasource": [
                "点击指向另一个数据源"
            ],
            "Edit the datasource's configuration": [
                "编辑数据源的配置"
            ],
            "Show datasource configuration": [
                "显示数据源配置"
            ],
            "Select metric": [
                "选择指标"
            ],
            "Select column": [
                "选择列"
            ],
            "Select operator": [
                "选择运算符"
            ],
            "Add Filter": [
                "增加过滤条件"
            ],
            "choose a column or aggregate function": [
                "选择一个列或聚合函数"
            ],
            "Error while fetching data": [
                "获取数据时出错"
            ],
            "No results found": [
                "没有返回结果"
            ],
            "%s option(s)": [
                ""
            ],
            "Invalid lat/long configuration.": [
                ""
            ],
            "Longitude & Latitude columns": [
                ""
            ],
            "Delimited long & lat single column": [
                ""
            ],
            "Multiple formats accepted, look the geopy.points Python library for more details": [
                ""
            ],
            "Reverse lat/long ": [
                ""
            ],
            "Geohash": [
                ""
            ],
            "textarea": [
                "文本区域"
            ],
            "Edit": [
                "编辑"
            ],
            "in modal": [
                "在模态中"
            ],
            "Select a visualization type": [
                "选择一个可视化类型"
            ],
            "Favorites": [
                "收藏"
            ],
            "Created Content": [
                "创建内容"
            ],
            "Recent Activity": [
                "近期活动"
            ],
            "Security & Access": [
                "安全 & 访问"
            ],
            "No charts": [
                "没有图表"
            ],
            "No dashboards": [
                "没有看板"
            ],
            "Dashboards": [
                "看板"
            ],
            "Charts": [
                "图表"
            ],
            "No favorite charts yet, go click on stars!": [
                "没有最喜欢的图表，点击收藏!"
            ],
            "No favorite dashboards yet, go click on stars!": [
                "暂无收藏的看板，去点击收藏吧！"
            ],
            "Roles": [
                "角色"
            ],
            "Databases": [
                "数据库"
            ],
            "Datasources": [
                "数据源"
            ],
            "Profile picture provided by Gravatar": [
                "资料图片由 Gravatar 提供"
            ],
            "joined": [
                "joined"
            ],
            "id:": [
                "id:"
            ],
            "Sorry, there appears to be no data": [
                "对不起，似乎没有数据"
            ],
            "Data has no time steps": [
                "数据没有时间步骤"
            ],
            "Select starting date": [
                "选择开始日期"
            ],
            "Select end date": [
                "选择结束日期"
            ],
            "Select [%s]": [
                "选择 [%s]"
            ],
            "Apply": [
                "申请"
            ],
            "You cannot use 45° tick layout along with the time range filter": [
                "你不能使用45°标记布局以及时间范围过滤器"
            ],
            "Recently Viewed": [
                "最近查看"
            ],
            "Metric(s) {} must be aggregations.": [
                "Metric(s) {} 必须聚合。"
            ],
            "No data was returned.": [
                "没有返回任何数据。"
            ],
            "Unsupported extraction function: ": [
                "不支持提取功能:"
            ],
            "List Druid Column": [
                "Druid 列的列表"
            ],
            "Show Druid Column": [
                "显示 Druid 列"
            ],
            "Add Druid Column": [
                "添加 Druid 列"
            ],
            "Edit Druid Column": [
                "编辑 Druid 列"
            ],
            "Column": [
                "列"
            ],
            "Type": [
                "类型"
            ],
            "Groupable": [
                "可分组"
            ],
            "Filterable": [
                "可过滤"
            ],
            "Count Distinct": [
                "计数"
            ],
            "Sum": [
                "求和"
            ],
            "Whether this column is exposed in the `Filters` section of the explore view.": [
                "该列是否在浏览视图的`过滤器`部分显示。"
            ],
            "List Druid Metric": [
                "Druid 指标列表"
            ],
            "Show Druid Metric": [
                "显示 Druid 指标"
            ],
            "Add Druid Metric": [
                "添加 Druid 指标"
            ],
            "Edit Druid Metric": [
                "编辑 Druid 指标"
            ],
            "Whether the access to this metric is restricted to certain roles. Only roles with the permission 'metric access on XXX (the name of this metric)' are allowed to access this metric": [
                "对此度量的访问是否仅限于某些角色。只有具有‘XXX上的指标访问权限(此指标的名称)’的角色才能访问该指标"
            ],
            "Verbose Name": [
                "全称"
            ],
            "JSON": [
                "JSON"
            ],
            "Druid Datasource": [
                "Druid 数据源"
            ],
            "Warning Message": [
                "告警信息"
            ],
            "List Druid Cluster": [
                "Druid 集群列表"
            ],
            "Show Druid Cluster": [
                "显示 Druid 集群"
            ],
            "Add Druid Cluster": [
                "添加 Druid 集群"
            ],
            "Edit Druid Cluster": [
                "编辑 Druid 集群"
            ],
            "Cluster": [
                "集群"
            ],
            "Coordinator Host": [
                "协调器主机"
            ],
            "Coordinator Port": [
                "协调器端口"
            ],
            "Coordinator Endpoint": [
                "协调器端点"
            ],
            "Broker Host": [
                "代理主机"
            ],
            "Broker Port": [
                "代理端口"
            ],
            "Broker Endpoint": [
                "代理端点"
            ],
            "Druid Clusters": [
                "Druid 集群"
            ],
            "Sources": [
                "数据源"
            ],
            "List Druid Datasource": [
                "Druid 数据源列表"
            ],
            "Show Druid Datasource": [
                "显示 Druid 数据源"
            ],
            "Add Druid Datasource": [
                "添加 Druid 数据源"
            ],
            "Edit Druid Datasource": [
                "编辑 Druid 数据源"
            ],
            "The list of charts associated with this table. By altering this datasource, you may change how these associated charts behave. Also note that charts need to point to a datasource, so this form will fail at saving if removing charts from a datasource. If you want to change the datasource for a chart, overwrite the chart from the 'explore view'": [
                "与该表关联的图表列表。通过更改此数据源，您可以更改这些关联图表的行为。还要注意，图表需要指向数据源，因此如果从数据源中删除图表，这个表单将无法保存。如果要更改图表的数据源，请从'explore视图'中覆盖图表"
            ],
            "Timezone offset (in hours) for this datasource": [
                "数据源的时差(单位：小时)"
            ],
            "Time expression to use as a predicate when retrieving distinct values to populate the filter component. Only applies when `Enable Filter Select` is on. If you enter `7 days ago`, the distinct list of values in the filter will be populated based on the distinct value over the past week": [
                "当检索不同的值以填充过滤器组件时，时间表达式用作条件。只适用于`启用过滤器选择`。如果您输入`7天前`，将根据过去一周的不同值来填充ilter中不同的值列表"
            ],
            "Whether to populate the filter's dropdown in the explore view's filter section with a list of distinct values fetched from the backend on the fly": [
                "是否在浏览视图的过滤器部分中填充过滤器的下拉列表，并提供从后端获取的不同值的列表"
            ],
            "Redirects to this endpoint when clicking on the datasource from the datasource list": [
                "在数据源列表中点击数据源将重定向到此端点"
            ],
            "Associated Charts": [
                "相关图表"
            ],
            "Data Source": [
                "数据源"
            ],
            "Owner": [
                "所有者"
            ],
            "Is Hidden": [
                "隐藏"
            ],
            "Enable Filter Select": [
                "启用过滤器选择"
            ],
            "Default Endpoint": [
                "默认端点"
            ],
            "Time Offset": [
                "时间偏移"
            ],
            "Cache Timeout": [
                "缓存时间"
            ],
            "Druid Datasources": [
                "Druid 数据源"
            ],
            "Scan New Datasources": [
                "扫描新的数据源"
            ],
            "Refresh Druid Metadata": [
                "刷新 Druid 元数据"
            ],
            "Datetime column not provided as part table configuration and is required by this type of chart": [
                "缺少时间字段"
            ],
            "Empty query?": [
                "查询为空？"
            ],
            "Metric '{}' is not valid": [
                "'{}'是无效的"
            ],
            "Table [{}] doesn't seem to exist in the specified database, couldn't fetch column information": [
                "指定的数据库中似乎不存在 [{}] 表，无法获取列信息"
            ],
            "List Columns": [
                "列列表"
            ],
            "Show Column": [
                "显示列"
            ],
            "Add Column": [
                "添加列"
            ],
            "Edit Column": [
                "编辑列"
            ],
            "Whether to make this column available as a [Time Granularity] option, column has to be DATETIME or DATETIME-like": [
                "是否将此列作为[时间粒度]选项, 列中的数据类型必须是DATETIME"
            ],
            "The data type that was inferred by the database. It may be necessary to input a type manually for expression-defined columns in some cases. In most case users should not need to alter this.": [
                "由数据库推断的数据类型。在某些情况下，可能需要为表达式定义的列手工输入一个类型。在大多数情况下，用户不需要修改这个数据类型。"
            ],
            "Expression": [
                "表达式"
            ],
            "Is temporal": [
                "表示时间"
            ],
            "Datetime Format": [
                "时间格式"
            ],
            "Database Expression": [
                "数据库表达式"
            ],
            "List Metrics": [
                "指标列"
            ],
            "Show Metric": [
                "显示指标"
            ],
            "Add Metric": [
                "添加指标"
            ],
            "Edit Metric": [
                "编辑指标"
            ],
            "SQL Expression": [
                "SQL表达式"
            ],
            "D3 Format": [
                "D3 格式"
            ],
            "Is Restricted": [
                "受限的"
            ],
            "List Tables": [
                "表列表"
            ],
            "Show Table": [
                "显示表"
            ],
            "Add Table": [
                "添加表"
            ],
            "Edit Table": [
                "编辑表"
            ],
            "Name of the table that exists in the source database": [
                "源数据库中存在的表的名称"
            ],
            "Schema, as used only in some databases like Postgres, Redshift and DB2": [
                "模式，只在一些数据库中使用，比如Postgres、Redshift和DB2"
            ],
            "This fields acts a Superset view, meaning that Superset will run a query against this string as a subquery.": [
                "这个字段执行Superset视图时，意味着Superset将以子查询的形式对字符串运行查询。"
            ],
            "Predicate applied when fetching distinct value to populate the filter control component. Supports jinja template syntax. Applies only when `Enable Filter Select` is on.": [
                "当获取不同的值来填充过滤器组件应用时。支持jinja的模板语法。只在`启用过滤器选择`时应用。"
            ],
            "Redirects to this endpoint when clicking on the table from the table list": [
                "点击表列表中的表时将重定向到此端点"
            ],
            "Whether the table was generated by the 'Visualize' flow in SQL Lab": [
                "表是否由SQL 工具箱中的“可视化”流生成"
            ],
            "A set of parameters that become available in the query using Jinja templating syntax": [
                "使用Jinja模板语法在查询中可用的一组参数"
            ],
            "Changed By": [
                "修改人"
            ],
            "Last Changed": [
                "更新时间"
            ],
            "Offset": [
                "偏移"
            ],
            "Fetch Values Predicate": [
                "取值谓词"
            ],
            "Main Datetime Column": [
                "主日期列"
            ],
            "SQL Lab View": [
                "SQL 工具箱视图"
            ],
            "Template parameters": [
                "模板参数"
            ],
            "Table [{}] could not be found, please double check your database connection, schema, and table name": [
                "找不到 [{}] 表，请仔细检查您的数据库连接、Schema 和 表名"
            ],
            "The table was created. As part of this two phase configuration process, you should now click the edit button by the new table to configure it.": [
                "表被创建。作为这两个阶段配置过程的一部分，您现在应该单击新表的编辑按钮来配置它。"
            ],
            "Refresh Metadata": [
                "刷新元数据"
            ],
            "Refresh column metadata": [
                "刷新列元数据"
            ],
            "Metadata refreshed for the following table(s): %(tables)s": [
                "为下表刷新元数据: %(tables)s"
            ],
            "Tables": [
                "数据表"
            ],
            "Profile": [
                "用户信息"
            ],
            "Logout": [
                "退出"
            ],
            "Login": [
                "登录"
            ],
            "Record Count": [
                "记录数"
            ],
            "No records found": [
                "没有找到任何记录"
            ],
            "Import dashboards": [
                "引入看板"
            ],
            "No Access!": [
                "不能访问!"
            ],
            "You do not have permissions to access the datasource(s): %(name)s.": [
                "您没有权限访问数据源(s): %(name)s。"
            ],
            "Request Permissions": [
                "请求权限"
            ],
            "Test Connection": [
                "测试连接"
            ],
            "Annotation Layers": [
                "注解层"
            ],
            "Manage": [
                "管理"
            ],
            "Annotations": [
                "注解"
            ],
            "Datasource %(name)s already exists": [
                "数据源%(name)s 已存在"
            ],
            "json isn't valid": [
                "无效 JSON"
            ],
            "Export to YAML": [
                "导出到YAML"
            ],
            "Export to YAML?": [
                "导出到YAML？"
            ],
            "Delete": [
                "删除"
            ],
            "Delete all Really?": [
                "确定删除全部？"
            ],
            "This endpoint requires the `all_datasource_access` permission": [
                "这个端点需要“all_datasource_access”的权限"
            ],
            "The datasource seems to have been deleted": [
                "数据源已经被删除"
            ],
            "The access requests seem to have been deleted": [
                "访问请求已被删除"
            ],
            "The user seems to have been deleted": [
                "用户已经被删除"
            ],
            "You don't have access to this datasource. <a href='{}'>(Gain access)</a>": [
                "您无法访问此数据源<a href='{}'>(Gain access)</a>"
            ],
            "You don't have access to this datasource": [
                "你不能访问这个数据源"
            ],
            "This view requires the database %(name)s or `all_datasource_access` permission": [
                "此视图需要数据库 %(name)s或“all_datasource_access”权限"
            ],
            "This endpoint requires the datasource %(name)s, database or `all_datasource_access` permission": [
                "此端点需要数据源 %(name)s、数据库或“all_datasource_access”权限"
            ],
            "List Databases": [
                "数据库列表"
            ],
            "Show Database": [
                "显示数据库"
            ],
            "Add Database": [
                "添加数据库"
            ],
            "Edit Database": [
                "编辑数据库"
            ],
            "Expose this DB in SQL Lab": [
                "在 SQL 工具箱中公开这个数据库"
            ],
            "Allow users to run synchronous queries, this is the default and should work well for queries that can be executed within a web request scope (<~1 minute)": [
                "允许用户运行同步查询，这是默认值，可以很好地处理在web请求范围内执行的查询（<~ 1 分钟）"
            ],
            "Allow users to run queries, against an async backend. This assumes that you have a Celery worker setup as well as a results backend.": [
                "允许用户对异步后端运行查询。 假设您有一个 Celery 工作者设置以及后端结果。"
            ],
            "Allow CREATE TABLE AS option in SQL Lab": [
                "在 SQL 编辑器中允许 CREATE TABLE AS 选项"
            ],
            "Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab": [
                "允许用户在 SQL 编辑器中运行非 SELECT 语句（UPDATE，DELETE，CREATE，...）"
            ],
            "When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema": [
                "当在 SQL 编辑器中允许 CREATE TABLE AS 选项时，此选项可以此模式中强制创建表"
            ],
            "If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.": [
                ""
            ],
            "Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.": [
                "允许SQL Lab获取所有数据库模式的所有表和所有视图的列表。对于具有数千个表的大型数据仓库，这可能功能的代价是昂贵的，并对系统造成压力。"
            ],
            "Expose in SQL Lab": [
                "在 SQL 工具箱中公开"
            ],
            "Allow CREATE TABLE AS": [
                "允许 CREATE TABLE AS"
            ],
            "Allow DML": [
                "允许 DML"
            ],
            "CTAS Schema": [
                "CTAS 模式"
            ],
            "Creator": [
                "作者"
            ],
            "SQLAlchemy URI": [
                "SQLAlchemy URI"
            ],
            "Extra": [
                "扩展"
            ],
            "Allow Run Sync": [
                "允许同步运行"
            ],
            "Allow Run Async": [
                "允许异步运行"
            ],
            "Impersonate the logged on user": [
                "模拟登录用户"
            ],
            "Import Dashboards": [
                "导入仪表盘"
            ],
            "CSV to Database configuration": [
                "从CSV到数据库配置"
            ],
            "CSV file \"{0}\" uploaded to table \"{1}\" in database \"{2}\"": [
                ""
            ],
            "User": [
                "用户"
            ],
            "User Roles": [
                "用户角色"
            ],
            "Database URL": [
                "数据库URL"
            ],
            "Roles to grant": [
                "角色授权"
            ],
            "Created On": [
                "创建日期"
            ],
            "Access requests": [
                "访问请求"
            ],
            "Security": [
                "安全"
            ],
            "List Charts": [
                "图表列表"
            ],
            "Show Chart": [
                "展示图表"
            ],
            "Add Chart": [
                "添加图表"
            ],
            "Edit Chart": [
                "编辑图表"
            ],
            "These parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object is exposed here for reference and for power users who may want to alter specific parameters.": [
                "当单击“保存”或“覆盖”按钮时，这些参数会在视图中动态生成。高级用户可以在这里改变特定的参数。"
            ],
            "Duration (in seconds) of the caching timeout for this chart.": [
                "此图表缓存超时的持续时间(以秒为单位)。"
            ],
            "Last Modified": [
                "最后修改"
            ],
            "Owners": [
                "所有者"
            ],
            "Parameters": [
                "参数"
            ],
            "Chart": [
                "图表"
            ],
            "List Dashboards": [
                "仪表盘列表"
            ],
            "Show Dashboard": [
                "显示仪表盘"
            ],
            "Add Dashboard": [
                "添加仪表盘"
            ],
            "Edit Dashboard": [
                "编辑仪表盘"
            ],
            "This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view": [
                "这个json对象描述了仪表板中小部件的位置。它是在使用仪表板视图中的拖放操作来调整小部件大小和位置时动态生成的"
            ],
            "The css for individual dashboards can be altered here, or in the dashboard view where changes are immediately visible": [
                "可以在这里或者在看板视图修改单个看板的CSS样式"
            ],
            "To get a readable URL for your dashboard": [
                "为看板生成一个可读的 URL"
            ],
            "This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters.": [
                "当在看板视图中单击“保存”或“覆盖”按钮时，这些参数会在视图中动态生成。高级用户可以在这里改变特定的参数。"
            ],
            "Owners is a list of users who can alter the dashboard.": [
                "“所有者”是一组可以修改看板的用户列表。"
            ],
            "Dashboard": [
                "看板"
            ],
            "Slug": [
                "Slug"
            ],
            "Position JSON": [
                "位置参数"
            ],
            "JSON Metadata": [
                "JSON 模板"
            ],
            "Underlying Tables": [
                "底层表"
            ],
            "Export": [
                "导出"
            ],
            "Export dashboards?": [
                "导出仪表盘?"
            ],
            "Action": [
                "操作"
            ],
            "dttm": [
                "DTTM"
            ],
            "Action Log": [
                "操作日志"
            ],
            "Access was requested": [
                "请求访问"
            ],
            "%(user)s was granted the role %(role)s that gives access to the %(datasource)s": [
                "授予 %(user)s %(role)s 角色来访问 %(datasource)s 数据库"
            ],
            "Role %(r)s was extended to provide the access to the datasource %(ds)s": [
                "扩展角色 %(r)s 以提供对 datasource %(ds)s 的访问"
            ],
            "You have no permission to approve this request": [
                "您没有权限批准此请求"
            ],
            "You don't have the rights to ": [
                "您没有权利"
            ],
            "alter this ": [
                ""
            ],
            "chart": [
                "图表"
            ],
            "create a ": [
                "创建一个"
            ],
            "dashboard": [
                "看板"
            ],
            "Malformed request. slice_id or table_name and db_name arguments are expected": [
                "格式错误的请求。需要使用 slice_id 或 table_name 和 db_name 参数"
            ],
            "Chart %(id)s not found": [
                "没有找到图表 %(id)s"
            ],
            "Table %(t)s wasn't found in the database %(d)s": [
                "在数据库 %(d)s 中找不到表 %(t)s"
            ],
            "Can't find User '%(name)s', please ask your admin to create one.": [
                "无法找到用户'%(name)s'，请让您的管理员创建一个。"
            ],
            "Can't find DruidCluster with cluster_name = '%(name)s'": [
                "不能找到具有 cluster_name = '%(name)s' 的 Druid 集群"
            ],
            "Query record was not created as expected.": [
                "查询记录没有按预期创建。"
            ],
            "Template Name": [
                "模板名称"
            ],
            "CSS Templates": [
                "CSS 模板"
            ],
            "SQL Editor": [
                "SQL 编辑器"
            ],
            "SQL Lab": [
                "SQL 工具箱"
            ],
            "Query Search": [
                "查询搜索"
            ],
            "Upload a CSV": [
                "上传一个 CSV 文件"
            ],
            "Status": [
                "状态"
            ],
            "Start Time": [
                "开始时间"
            ],
            "End Time": [
                "结束时间"
            ],
            "Queries": [
                "查询"
            ],
            "List Saved Query": [
                "保存的查询列表"
            ],
            "Show Saved Query": [
                "显示保存的查询"
            ],
            "Add Saved Query": [
                "添加保存的查询"
            ],
            "Edit Saved Query": [
                "编辑保存的查询"
            ],
            "Pop Tab Link": [
                "流行标签链接"
            ],
            "Changed on": [
                "改变为"
            ],
            "Saved Queries": [
                "已保存查询"
            ]
        }
    }
};

const i18n = (function () {
  let languagePack = DEFAULT_LANGUAGE_PACK;

  if (typeof window !== 'undefined') {
    const root = document.getElementById('app');
    const bootstrapData = root ? JSON.parse(root.getAttribute('data-bootstrap')) : {};
    if (bootstrapData.common && bootstrapData.common.language_pack) {
      languagePack = bootstrapData.common.language_pack;
      delete bootstrapData.common.locale;
      delete bootstrapData.common.language_pack;
    }
  }

  return new Jed(languagePack);
}());

export default i18n;
